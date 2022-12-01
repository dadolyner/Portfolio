import * as React from 'react';
import { PopupContainer, PopupContent, HeaderBar, CloseButton, Title, Form, Label, Input, TextArea, Html, Select, Divider, ButtonsContainer, Button } from './popup.styled';
import { DadoPopup } from './popup.interface';

// <Popup
// 	    key={'testPopup'}
// 	    active={true}
// 	    title={'Test Popup'}
// 	    size={700}
// 	    labelAligment={'center'}
// 	    onClose={() => console.log('Closed clicked')}
// 	    inputs={[
// 	    	{ type: 'text', name: 'text', label: 'Text' },
// 	    	{ type: 'number', name: 'number', label: 'Number' },
// 	    	{ type: 'email', name: 'email', label: 'Email' },
// 	    	{ type: 'password', name: 'password', label: 'Password' },
// 	    	{ type: 'tel', name: 'tel', label: 'Tel' },
// 	    	{ type: 'textarea', name: 'textarea', label: 'Textarea' },
// 	    	{ type: 'color', name: 'color', label: 'Color' },
// 	    	{ type: 'url', name: 'url', label: 'Url' },
// 	    	{ type: 'date', name: 'date', label: 'Date' },
// 	    	{ type: 'time', name: 'time', label: 'Time' },
// 	    	{ type: 'datetime-local', name: 'datetime-local', label: 'Datetime-local' },
// 	    	{ type: 'button', name: 'button', label: 'Button', value: 'Button', onClick: () => console.log('Button click') },
// 	    	{ type: 'dropdown', name: 'dropdown', label: 'Dropdown', options: [{ optionValue: 'Test Value', optionLabel: 'Test Label' }] },
// 	    	{ type: 'dropdown-search', name: 'dropdown-search', label: 'Dropdown-search', options: [{ optionValue: 'Test Value', optionLabel: 'Test Label' }] },
// 	    	{ type: 'html', name: 'html', label: 'Html', value: `<hr style="width: 100%;"/><h1>HTML</h1><hr style="width: 100%;"/>` },
// 	    	{ type: 'file', name: 'file', label: 'File' },
// 	    	{ type: 'range', name: 'range', label: 'Range' },
// 	    	{ type: 'checkbox', name: 'checkbox', label: 'Checkbox' },
// 	    ]}
// 	    bottomButtons={[{ name: 'confirm', value: 'Confirm', onClick: () => {} }]}
// 	    onConfirm={(values) => { console.log('Confirm clicked', values) }}
// />

const popupTheme = { background: '#fff', border: '#aaa', text: '#000' }
const buttonsTheme = { background: '#4568da', backgroundHover: '#ffffff', border: '#ffffff', borderHover: '#4568da', text: '#ffffff', textHover: '#4568da' }
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
    const { active, title, size, labelAligment, inputs, bottomButtons, onLoad, onClose, onConfirm} = props
    const { background, border, text } = props.theme || popupTheme
    
    const [dataOutput, setDataOutput] = React.useState({} as any);
    const handleChange = (event: any) => setDataOutput((prevState: any) => ({ ...prevState, [event.target.name]: event.target.value }))
    const handleFileChange = (event: any) => setDataOutput((prevState: any) => ({ ...prevState, [event.target.name]: event.target.files[0] }))
    const handleCheckboxChange = (event: any) =>  setDataOutput((prevState: any) => ({ ...prevState, [event.target.name]: event.target.checked }))
	const PopupConfirm = () => { return dataOutput; }
    React.useEffect(() => { if(onLoad) onLoad() } , []);

	return (
		<>
			<PopupContainer key={uuid()} id={id} className={active ? 'shown' : 'hidden'}>
				<PopupContent key={uuid()} size={size} style={{ backgroundColor: background, color: text, borderColor: border }}>
					<HeaderBar key={uuid()} style={{ background: border }}>
                        <CloseButton key={uuid()} onClick={() => onClose()}>&times;</CloseButton>
                    </HeaderBar>

					<Title key={uuid()}>{title}</Title>

					<Form key={uuid()} size={size}>
						{ inputs.map((input) => {
							const { type } = input
							switch (type) {
                                case 'text': {
                                    const { name, label, value, placeholder } = input
									return (
                                        <React.Fragment key={uuid()}>
									    	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={uuid()} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </React.Fragment>
                                    );
                                }
								
								case 'number': {
                                    const { name, label, value, placeholder } = input
									return ( 
                                        <React.Fragment key={uuid()}>
									    	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={uuid()} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </React.Fragment>
                                    );
                                }

                                case 'email': {
                                    const { name, label, value, placeholder } = input
									return ( 
                                        <React.Fragment key={uuid()}>
									    	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={uuid()} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </React.Fragment>
                                    );
                                }

								case 'password': {
                                    const { name, label, value, placeholder } = input
									return ( 
                                        <React.Fragment key={uuid()}>
									    	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={uuid()} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </React.Fragment>
                                    );
                                }

                                case 'tel': {
                                    const { name, label, value, placeholder } = input
									return ( 
                                        <React.Fragment key={uuid()}>
									    	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={uuid()} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </React.Fragment>
                                    );
                                }

                                case 'textarea': {
                                    const { name, label, value, placeholder } = input
									return (
                                        <React.Fragment key={uuid()}>
									    	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<TextArea key={uuid()} id={name} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </React.Fragment>
                                    );
                                }

								case 'color': {
                                    const { name, label, value, placeholder } = input
									return ( 
                                        <React.Fragment key={uuid()}>
									    	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input id={uuid()} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </React.Fragment>
                                    );
                                }

                                case 'url': {
                                    const { name, label, value, placeholder } = input
									return (
                                        <React.Fragment key={uuid()}>
									    	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={uuid()} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </React.Fragment>
                                    );
                                }

                                case 'date': {
                                    const { name, label, value, placeholder } = input
									return (
                                        <React.Fragment key={uuid()}>
									    	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={uuid()} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </React.Fragment>
                                    );
                                }


								case 'time': {
                                    const { name, label, value, placeholder } = input
									return (
                                        <React.Fragment key={uuid()}>
									    	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={uuid()} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </React.Fragment>
                                    );
                                }


								case 'datetime-local': {
                                    const { name, label, value, placeholder } = input
									return (
                                        <React.Fragment key={uuid()}>
									    	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={uuid()} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </React.Fragment>
                                    );
                                }

								case 'button': {
                                    const { type, name, label, value, color, onClick } = input
									return (
                                        <React.Fragment key={uuid()}>
									    	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={uuid()} id={name} type={type} name={name} value={value ? value : ''} onClick={() => onClick()} style={{ backgroundColor: color ? color : background, color: text, borderColor: border }}/>
									    </React.Fragment>
                                    );
                                }

								case 'dropdown': {
                                    const { name, label, value, options } = input
									return (
                                        <React.Fragment key={uuid()}>
									    	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Select key={uuid()} id={name} name={name} value={dataOutput[name] ? dataOutput[name] : value} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}>
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
									    	<Input key={uuid()} id={name} name={name} type={'text'} list={ref} value={dataOutput[name] ? dataOutput[name] : value} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
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
								        	<Input key={uuid()} id={name} type={type} name={name} onChange={(e) => handleFileChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
								        </React.Fragment>
                                    );
                                }

                                case 'range': {
                                    const { type, name, label, value, min, max } = input
									return (
                                        <React.Fragment key={uuid()}>
									    	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label} ({dataOutput[name] ? dataOutput[name] : 0})</Label> 
									    	<Input key={uuid()} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} step={1} min={min ? min : 0} max={max ? max : 100} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </React.Fragment>
                                    );
                                }

								case 'checkbox': {
                                    const { type, name, label, value } = input
									return (
                                        <React.Fragment key={uuid()}>
									    	<Label key={uuid()} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={uuid()} id={name} type={type} name={name} checked={dataOutput[name] ? dataOutput[name] : value} onChange={(e) => handleCheckboxChange(e)}/>
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

					<ButtonsContainer key={uuid()}>
						{ bottomButtons.map((button) => {
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