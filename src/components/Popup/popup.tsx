import * as React from 'react';
import { PopupContainer, PopupContent, HeaderBar, CloseButton, Title, GroupsContainer, Group, Form, Label, Input, TextArea, Html, Select, Divider, ButtonsContainer, Button } from './popup.styled';
import { DadoPopup } from './popup.interface';

//<Popup
//  key={'registerPopup'}
//  active={true}
//  title={'Auth'}
//  size={700}
//  labelAligment={'center'}
//  onClose={() => console.log('Top Close Clicked')}
//  groups={[
//      {
//          name: 'Register',
//          inputs: [
//              { type: 'text', name: 'first_name', label: 'First Name' },
//              { type: 'text', name: 'last_name', label: 'Last Name' },
//              { type: 'email', name: 'email', label: 'Email' },
//              { type: 'password', name: 'password', label: 'Password' },
//              { type: 'button', name: 'registerButton', value: 'Register', onClick: () => console.log('Register Clicked'), theme: { background: '#4568da', backgroundHover: '#ffffff', border: '#ffffff', borderHover: '#4568da', text: '#ffffff', textHover: '#4568da' } },
//          ]
//      },
//      {
//          name: 'Login',
//          inputs: [
//              { type: 'email', name: 'login_email', label: 'Email' },
//              { type: 'password', name: 'login_password', label: 'Password' },
//              { type: 'button', name: 'loginButton', value: 'login', onClick: () => console.log('Login Clicked'), theme: { background: '#4568da', backgroundHover: '#ffffff', border: '#ffffff', borderHover: '#4568da', text: '#ffffff', textHover: '#4568da' } },
//          ]
//      }            
//  ]}                 
//  bottomButtons={[
//         { name: 'confirm', value: 'Confirm', onClick: () => console.log('Confirm Clicked'), theme: { background: '#4568da', backgroundHover: '#ffffff', border: '#ffffff', borderHover: '#4568da', text: '#ffffff', textHover: '#4568da' } },
//         { name: 'close', value: 'Close', onClick: () => console.log('Close Clicked'), theme: { background: '#a20f0f', backgroundHover: '#ffffff', border: '#ffffff', borderHover: '#a20f0f', text: '#ffffff', textHover: '#a20f0f' } },
//     ]}
//  onConfirm={(values) => { console.log('Confirm clicked', values) }}
///>

const popupTheme = { background: '#fff', border: '#aaa', text: '#000' }
const buttonsTheme = { background: '#4568da', backgroundHover: '#ffffff', border: '#ffffff', borderHover: '#4568da', text: '#ffffff', textHover: '#4568da' }
const groupTheme = { background: '#fff', border: '#aaa', text: '#000' }

const uuid = (): string => {
    return `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, (char) => {
        const randomNumber = Math.random() * 16 | 0
        const uuid = (char === 'x') ? (randomNumber) : (randomNumber & 3 | 8)
        return uuid.toString(16)
    })
}
const id = uuid();

// POPUP
const Popup: React.FC<DadoPopup> = (props: DadoPopup) => {
    const { active, title, size, labelAligment, bottomButtons, onLoad, onClose, onConfirm} = props
    const { background, border, text } = props.theme || popupTheme
    const groups = props.groups || [{ name: '', inputs: props.inputs }]
    
    const [unClickedRefs, setUnClickedRefs] = React.useState([] as any);
    const [dataOutput, setDataOutput] = React.useState({} as any);
    const handleChange = (event: any) => {
        const { name } = event.target
        const ref = inputRefs[name].current
        const index = unClickedRefs.indexOf(ref)
        if(index === -1) setUnClickedRefs((prevState: any) => [...prevState, ref])
        setDataOutput((prevState: any) => ({ ...prevState, [event.target.name]: event.target.value }))
    }
    const handleFileChange = (event: any) => setDataOutput((prevState: any) => ({ ...prevState, [event.target.name]: event.target.files[0] }))
    const handleCheckboxChange = (event: any) => setDataOutput((prevState: any) => ({ ...prevState, [event.target.name]: event.target.checked }))
    const PopupConfirm = () => { return dataOutput; }
    React.useEffect(() => { if(onLoad) onLoad() } , []);

    const inputRefs = groups.reduce((acc: any, group: any) => {
        const name = group.inputs.reduce((acc: any, input: any) => {
            acc[input.name] = React.createRef()
            return acc
        }, {})
        return { ...acc, ...name }
    }, {})

    React.useEffect(() => {
        const lastInput = unClickedRefs[unClickedRefs.length - 1]
        if(lastInput) {
            inputRefs[lastInput.name].current.scrollIntoView({ behavior: 'smooth', block: 'center'})
            inputRefs[lastInput.name].current.focus()
            inputRefs[lastInput.name].current.showPicker()
        }
    }, [unClickedRefs])

	return (
		<>
			<PopupContainer key={uuid()} id={id} className={active ? 'shown' : 'hidden'}>
				<PopupContent key={uuid()} size={size} style={{ backgroundColor: background, color: text, borderColor: border }}>
					<HeaderBar key={uuid()} style={{ background: border }}>
                        <CloseButton key={uuid()} onClick={() => onClose()}>&times;</CloseButton>
                    </HeaderBar>

					<Title key={uuid()}>{title}</Title>

                    <GroupsContainer key={uuid()}>
                    { groups && groups.map((group) => {
                        const { name, inputs, theme } = group
                        const { background, border, text } = theme || groupTheme
                        return (
                            <Group key={uuid()} style={{ backgroundColor: background, color: text, borderColor: border }}>
                                <h3>{name}</h3>                                                 
					            <Form key={uuid()} size={size}>
					            	{ inputs.map((input) => {
					            		const { type } = input
					            		switch (type) {
                                            case 'text': {
                                                const { name, label, value, placeholder } = input
									            return (
                                                    <React.Fragment key={uuid()}>
									                	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label}</Label>
									                	<Input key={uuid()} ref={inputRefs[name]} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									                </React.Fragment>
                                                );
                                            }							
					            			case 'number': {
                                                const { name, label, value, placeholder } = input
									            return ( 
                                                    <React.Fragment key={uuid()}>
									                	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label}</Label>
									                	<Input key={uuid()} ref={inputRefs[name]} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									                </React.Fragment>
                                                );
                                            }
                                            case 'email': {
                                                const { name, label, value, placeholder } = input
									            return ( 
                                                    <React.Fragment key={uuid()}>
									                	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label}</Label>
									                	<Input key={uuid()} ref={inputRefs[name]} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									                </React.Fragment>
                                                );
                                            }
					            			case 'password': {
                                                const { name, label, value, placeholder } = input
									            return ( 
                                                    <React.Fragment key={uuid()}>
									                	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label}</Label>
									                	<Input key={uuid()} ref={inputRefs[name]} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									                </React.Fragment>
                                                );
                                            }
                                            case 'tel': {
                                                const { name, label, value, placeholder } = input
									            return ( 
                                                    <React.Fragment key={uuid()}>
									                	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label}</Label>
									                	<Input key={uuid()} ref={inputRefs[name]} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									                </React.Fragment>
                                                );
                                            }
                                            case 'textarea': {
                                                const { name, label, value, placeholder } = input
									            return (
                                                    <React.Fragment key={uuid()}>
									                	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label}</Label>
									                	<TextArea key={uuid()} ref={inputRefs[name]} id={name} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} onFocus={(e)=>e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									                </React.Fragment>
                                                );
                                            }
					            			case 'color': {
                                                const { name, label, value, placeholder } = input
									            return ( 
                                                    <React.Fragment key={uuid()}>
									                	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label}</Label>
									                	<Input id={uuid()} ref={inputRefs[name]} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									                </React.Fragment>
                                                );
                                            }
                                            case 'url': {
                                                const { name, label, value, placeholder } = input
									            return (
                                                    <React.Fragment key={uuid()}>
									                	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label}</Label>
									                	<Input key={uuid()} ref={inputRefs[name]} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									                </React.Fragment>
                                                );
                                            }
                                            case 'date': {
                                                const { name, label, value, placeholder } = input
									            return (
                                                    <React.Fragment key={uuid()}>
									                	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label}</Label>
									                	<Input key={uuid()} ref={inputRefs[name]} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									                </React.Fragment>
                                                );
                                            }
					            			case 'time': {
                                                const { name, label, value, placeholder } = input
									            return (
                                                    <React.Fragment key={uuid()}>
									                	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label}</Label>
									                	<Input key={uuid()} ref={inputRefs[name]} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									                </React.Fragment>
                                                );
                                            }
					            			case 'datetime-local': {
                                                const { name, label, value, placeholder } = input
									            return (
                                                    <React.Fragment key={uuid()}>
									                	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label}</Label>
									                	<Input key={uuid()} ref={inputRefs[name]} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									                </React.Fragment>
                                                );
                                            }
					            			case 'button': {
                                                const { type, name, label, value, onClick } = input
                                                const { background, backgroundHover, text, textHover, border, borderHover} = input.theme || buttonsTheme
									            return (
                                                    <React.Fragment key={uuid()}>
									                	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label}</Label>
									                	<Button key={uuid()} ref={inputRefs[name]} id={name} type={type} name={name} value={value ? value : ''} onClick={() => onClick()} background={background}backgroundHover={backgroundHover}border={border}borderHover={borderHover}text={text}textHover={textHover}className={'inline_button'}>{value}</Button>
									                </React.Fragment>
                                                );
                                            }
					            			case 'dropdown': {
                                                const { name, label, value, options } = input
									            return (
                                                    <React.Fragment key={uuid()}>
									                	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label}</Label>
									                	<Select key={uuid()} ref={inputRefs[name]} id={name} name={name} value={dataOutput[name] ? dataOutput[name] : value} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}>
                                                            <option key={uuid()} value={""}>Select an item ...</option>
                                                            { options.map((option) => { return ( <option key={uuid()} value={option.optionValue}>{option.optionLabel}</option> ) }) }
									                	</Select>
									                </React.Fragment>
                                                );
                                            }
					            			case 'dropdown-search': {
                                                const { name, label, value, options } = input
                                                const ref = uuid()
									            return (
                                                    <React.Fragment key={uuid()}>
									                	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label}</Label>
									                	<Input key={uuid()} ref={inputRefs[name]} id={name} name={name} type={'text'} list={ref} value={dataOutput[name] ? dataOutput[name] : value} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									                	<datalist key={uuid()} id={ref}>
                                                            <option key={uuid()} value={""}>Select an item ...</option>
                                                            { options.map((option) => { return ( <option key={uuid()} value={option.optionLabel}>{option.optionValue}</option> ) }) }
									                	</datalist>
									                </React.Fragment>
                                                );
                                            }
                                            case 'html': {
                                                const { value } = input
									            return (
                                                    <React.Fragment key={uuid()}>
									                	<Label key={uuid()}></Label>
									                	<Html key={uuid()} dangerouslySetInnerHTML={{ __html: value }} style={{ backgroundColor: background, color: text, borderColor: border }}></Html>
									                </React.Fragment>
                                                );
                                            }
                                            case 'file': {
                                                const { type, name, label } = input
								                return (
                                                    <React.Fragment key={uuid()}>
								                    	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label}</Label>
								                    	<Input key={uuid()} ref={inputRefs[name]} id={name} type={type} name={name} onChange={(e) => handleFileChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
								                    </React.Fragment>
                                                );
                                            }
                                            case 'range': {
                                                const { type, name, label, value, min, max } = input
									            return (
                                                    <React.Fragment key={uuid()}>
									                	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label} ({dataOutput[name] ? dataOutput[name] : 0})</Label> 
									                	<Input key={uuid()} ref={inputRefs[name]} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} step={1} min={min ? min : 0} max={max ? max : 100} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									                </React.Fragment>
                                                );
                                            }
					            			case 'checkbox': {
                                                const { type, name, label, value } = input
									            return (
                                                    <React.Fragment key={uuid()}>
									                	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label}</Label>
									                	<Input key={uuid()} ref={inputRefs[name]} id={name} type={type} name={name} checked={dataOutput[name] ? dataOutput[name] : value} onChange={(e) => handleCheckboxChange(e)} />
									                </React.Fragment>
                                                );
                                            }
					            			case 'spacer': {
									            return (
                                                    <React.Fragment key={uuid()}>
									                	<Label key={uuid()} className={labelAligment} style={{color: text}}></Label>
									                	<Divider key={uuid()}/>
									                </React.Fragment>
                                                );
                                            }
					            			default: 
					            				return null
					            		}
					            	})}
					            </Form>
                            </Group>
                        )
                    })}
                    </GroupsContainer>

					<ButtonsContainer key={uuid()}>
						{ bottomButtons && bottomButtons.map((button) => {
							const { name, value, onClick } = button
                            const { background, backgroundHover, text, textHover, border, borderHover} = button.theme || buttonsTheme
							return (
                                <React.Fragment key={uuid()}>
                                    <Button 
                                        key={uuid()}
                                        background={background}
                                        backgroundHover={backgroundHover}
                                        border={border}
                                        borderHover={borderHover}
                                        text={text}
                                        textHover={textHover}
                                        onClick={() => { if (name === 'confirm') { onClick(); onConfirm(PopupConfirm()) } else onClick() }}>
                                            {value}
                                    </Button>
                                </React.Fragment>
                            )
						})}
					</ButtonsContainer>
				</PopupContent>
			</PopupContainer>
		</>
	);
};

export default Popup;