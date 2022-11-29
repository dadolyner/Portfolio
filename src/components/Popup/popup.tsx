import * as React from 'react';
import { PopupContainer, PopupContent, HeaderBar, CloseButton, Title, Form, Label, Input, TextArea, Html, Select, Divider, ButtonsContainer, Button } from './popup.styled';
import { DadoPopup } from './popup.interface';

// const popupTheme = { background: '#fff', border: '#000', text: '#000' }
// const buttonTheme = { background: '#fff', backgroundHover: '#000', border: '#000', borderHover: '#fff', text: '#000', textHover: '#fff' }
// <Popup
//     key={'testPopup'}
//     active={true}
//     title={'Test Popup'}
//     size={700}
//     theme={popupTheme}
//     labelAligment={'center'}
//     onClose={() => false}
//     inputs={[
//         { type: 'text', name: 'text', label: 'Text' },
//         { type: 'number', name: 'number', label: 'Number' },
//         { type: 'email', name: 'email', label: 'Email' },
//         { type: 'password', name: 'password', label: 'Password' },
//         { type: 'tel', name: 'tel', label: 'Tel' },
//         { type: 'textarea', name: 'textarea', label: 'Textarea' },
//         { type: 'color', name: 'color', label: 'Color' },
//         { type: 'url', name: 'url', label: 'Url' },
//         { type: 'date', name: 'date', label: 'Date' },
//         { type: 'time', name: 'time', label: 'Time' },
//         { type: 'datetime-local', name: 'datetime-local', label: 'Datetime-local' },
//         { type: 'button', name: 'button', label: 'Button', value: 'Button', onClick: () => console.log("Foot") },
//         { type: 'dropdown', name: 'dropdown', label: 'Dropdown', options: [{ optionValue: 'Test Value', optionLabel: 'Test Label' }] },
//         { type: 'dropdown-search', name: 'dropdown-search', label: 'Dropdown-search', options: [{ optionValue: 'Test Value', optionLabel: 'Test Label' }] },
//         { type: 'html', name: 'html', label: 'Html' },
//         { type: 'file', name: 'file', label: 'File' },
//         { type: 'range', name: 'range', label: 'Range' },
//         { type: 'checkbox', name: 'checkbox', label: 'Checkbox' }
// 	]}
// bottomButtons={[{ name: 'confirm', value: 'Confirm', theme: buttonTheme,onClick: () => {} }]}
// onConfirm={(values) => { console.log(values) }}
// />

const uuid = (version: number): string => {
    return `xxxxxxxx-xxxx-${version}xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, (char) => {
        const randomNumber = Math.random() * 16 | 0
        const uuid = (char === 'x') ? (randomNumber) : (randomNumber & 3 | 8)
        return uuid.toString(16)
    })
}
const id = uuid(4);

// POPUP
const Popup: React.FC<DadoPopup> = (props: DadoPopup) => {
    const { active, title, size, theme, labelAligment, inputs, bottomButtons, onLoad, onClose, onConfirm} = props
	const { background, border, text } = theme
    
    const [dataOutput, setDataOutput] = React.useState({} as any);
    const handleChange = (event: any) => setDataOutput((prevState: any) => ({ ...prevState, [event.target.name]: event.target.value }));
    const handleFileChange = (event: any) => setDataOutput((prevState: any) => ({ ...prevState, [event.target.name]: event.target.files[0] }));
	const PopupConfirm = () => { return dataOutput; }
    React.useEffect(() => { if(onLoad) onLoad() } , []);

	return (
		<>
			<PopupContainer id={id} className={active ? 'shown' : 'hidden'}>
				<PopupContent size={size} style={{ backgroundColor: background, color: text, borderColor: border }}>
					<HeaderBar style={{ background: border }}>
                        <CloseButton onClick={() => onClose()}>&times;</CloseButton>
                    </HeaderBar>

					<Title>{title}</Title>

					<Form size={size}>
						{ inputs.map((input) => {
							const { type } = input
							switch (type) {
                                case 'text': {
                                    const { name, label, value, placeholder } = input
									return (
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </>
                                    );
                                }
								
								case 'number': {
                                    const { name, label, value, placeholder } = input
									return ( 
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </>
                                    );
                                }

                                case 'email': {
                                    const { name, label, value, placeholder } = input
									return ( 
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </>
                                    );
                                }

								case 'password': {
                                    const { name, label, value, placeholder } = input
									return ( 
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </>
                                    );
                                }

                                case 'tel': {
                                    const { name, label, value, placeholder } = input
									return ( 
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </>
                                    );
                                }

                                case 'textarea': {
                                    const { name, label, value, placeholder } = input
									return (
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<TextArea key={name} id={name} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </>
                                    );
                                }

								case 'color': {
                                    const { name, label, value, placeholder } = input
									return ( 
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </>
                                    );
                                }

                                case 'url': {
                                    const { name, label, value, placeholder } = input
									return (
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </>
                                    );
                                }

                                case 'date': {
                                    const { name, label, value, placeholder } = input
									return (
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </>
                                    );
                                }


								case 'time': {
                                    const { name, label, value, placeholder } = input
									return (
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </>
                                    );
                                }


								case 'datetime-local': {
                                    const { name, label, value, placeholder } = input
									return (
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} placeholder={placeholder} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </>
                                    );
                                }

								case 'button': {
                                    const { type, name, label, value, color, onClick } = input
									return (
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} value={value ? value : ''} onClick={() => onClick()} style={{ backgroundColor: color ? color : background, color: text, borderColor: border }}/>
									    </>
                                    );
                                }

								case 'dropdown': {
                                    const { name, label, value, options } = input
									return (
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Select key={name} id={name} name={name} value={dataOutput[name] ? dataOutput[name] : value} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}>
                                                <option key={"noneSelectedItemDropdown"} value={""}>Select an item ...</option>
                                                { options.map((option) => { return ( <><option key={option.optionValue} value={option.optionValue}>{option.optionLabel}</option></> ) }) }
									    	</Select>
									    </>
                                    );
                                }

								case 'dropdown-search': {
                                    const { name, label, value, options } = input
									return (
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={id + name} id={name} name={name} type={'text'} list={id + name + 'dropdownItemsList'} value={dataOutput[name] ? dataOutput[name] : value} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    	<datalist key={name} id={id + name + 'dropdownItemsList'}>
                                                <option key={"noneSelectedItemDropdownSearch"} value={""}>Select an item ...</option>
                                                { options.map((option) => { return ( <><option key={option.optionLabel} value={option.optionLabel}>{option.optionValue}</option></> ) }) }
									    	</datalist>
									    </>
                                    );
                                }

                                case 'html': {
                                    const {name, label, value} = input
									return (
                                        <>
									    	<Label key={label}></Label>
									    	<Html key={name} dangerouslySetInnerHTML={{ __html: value }} style={{ backgroundColor: background, color: text, borderColor: border }}></Html>
									    </>
                                    );
                                }

                                case 'file': {
                                    const { type, name, label } = input
								    return (
                                        <>
								        	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
								        	<Input key={name} id={name} type={type} name={name} onChange={(e) => handleFileChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
								        </>
                                    );
                                }

                                case 'range': {
                                    const { type, name, label, value, min, max } = input
									return (
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label} ({dataOutput[name] ? dataOutput[name] : 0})</Label> 
									    	<Input key={name} id={name} type={type} name={name} value={dataOutput[name] ? dataOutput[name] : value} step={1} min={min ? min : 0} max={max ? max : 100} onChange={(e) => handleChange(e)} style={{ backgroundColor: background, color: text, borderColor: border }}/>
									    </>
                                    );
                                }

								case 'checkbox': {
                                    const { type, name, label, value } = input
									return (
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}>{label}</Label>
									    	<Input key={name} id={name} type={type} name={name} checked={dataOutput[name] ? value : dataOutput[name]} onChange={(e) => handleChange(e)}/>
									    </>
                                    );
                                }

								case 'spacer': {
                                    const { name, label } = input
									return (
                                        <>
									    	<Label key={label} className={labelAligment} style={{color: text}}></Label>
									    	<Divider key={name}/>
									    </>
                                    );
                                }
								
								default: 
									return (<></>);
							}
						})}
					</Form>

					<ButtonsContainer>
						{ bottomButtons.map((button) => {
							const { name, value, theme, onClick } = button;
                            const { background, backgroundHover, text, textHover, border, borderHover} = theme;
							return (
                                <>
                                    <Button 
                                        key={name}
                                        background={background}
                                        backgroundHover={backgroundHover}
                                        border={border}
                                        borderHover={borderHover}
                                        text={text}
                                        textHover={textHover}
                                        onClick={() => { if (name === 'confirm') { onClick(); onConfirm(PopupConfirm()) } else onClick() }}>
                                            {value}
                                    </Button>
                                </>
                            )
						})}
					</ButtonsContainer>
				</PopupContent>
			</PopupContainer>
		</>
	);
};

export default Popup;