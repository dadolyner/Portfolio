import styled from 'styled-components';

// CONTAINER AND MAIN CONTENT
type PopupSettings = { size: number; };
type PopupButton = { background: string; backgroundHover: string; border: string; borderHover: string; text: string; textHover: string; }

export const PopupContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
    min-width: 250px;
	background: rgba(0, 0, 0, 0.5);
    font-family: Arial, Helvetica, sans-serif;
    z-index: 100;

    &.shown { display: flex; }
	&.hidden { display: none; }
`;
export const PopupContent = styled.div<PopupSettings>`
    background: #fff;
	max-height: 90%;
	max-width: 90%;
	width: ${(props) => props.size}px;
	border-radius: 5px;
	overflow: hidden;
`;

// HEADER AND TITLE
export const HeaderBar = styled.div`
	position: relative;
	background: #ccc;
	height: 25px;
`;
export const CloseButton = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	background: #f00;
	color: #fff;
	width: 25px;
	height: 25px;
	text-align: center;
	font-size: 22px;
	user-select: none;
    cursor: pointer;
	&:hover { background: #b00; }
`;
export const Title = styled.h1`
	text-align: center;
	user-select: none;
`;

// FORM SETUP
export const Form = styled.form<PopupSettings>`
	display: grid;
	grid-template-columns: ${(props) => props.size > 460 ? '30% 70%' : '100%' };
	row-gap: 10px;
	padding: 0 30px 0 20px;
	margin-right: 5px;
	max-height: 60vh;
	overflow: auto;

    @media screen and (max-width: 460px) {
		grid-template-columns: 100%;
	}

	::-webkit-scrollbar-track,
	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 2px 2px transparent !important;
		-webkit-box-shadow: inset 0 0 2px 2px transparent !important;
		border-radius: 10px;
		background: transparent !important;
	}
	::-webkit-scrollbar,
	::-webkit-scrollbar {
		width: 12px;
		background-color: var(--dado-primary) !important;
		border-radius: 10px;
	}
	::-webkit-scrollbar-thumb,
	::-webkit-scrollbar-thumb {
		background-color: #ddd !important;
		border-radius: 10px;
	}
	::-webkit-scrollbar-thumb:hover,
	::-webkit-scrollbar-thumb:hover {
		background: #aaa !important;
	}
`;

// INPUT ELEMENTS
export const Label = styled.label`
 	margin: auto auto;

	&.left { text-align: left; }
	&.center { text-align: center; }
	&.right { text-align: right; }

    @media screen and (max-width: 460px) {
        width: 100%;
        padding-left: 10px;
		text-align: left !important;
	}
`;
export const Input = styled.input`
	border: 0;
	outline: 0;
	border: 2px solid #ccc;
	border-radius: 5px;
	width: 100%;
	height: 42px;
    padding: 0 10px;
	font-size: 16px;
	transition: all 0.3s ease-in-out;

	&[type='range'] { padding: 0; }
	&[type='checkbox'] { width: 40px; margin-left: 10px; }
	&[type='button'] { width: calc(100% + 24px); cursor: pointer;}
	&[type='color'] { padding: 0 2px; width: calc(100% + 24px); cursor: pointer; }
    &[type='file'] { padding-top: 6px; height: 30px; cursor: pointer; }
`;
export const TextArea = styled.textarea`
	border: 0;
	outline: 0;
	border: 2px solid #ccc;
	border-radius: 5px;
	width: 100%;
    min-height: 20px;
	height: 100px;
	padding: 10px 10px;
	font-size: 16px;
	resize: vertical;
	transition: all 0.3 ease-in-out;
`;
export const Html = styled.div`
	grid-column: 1 / span 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
    width: 103%;
`;
export const Select = styled.select`
	border: 0;
	outline: 0;
	border: 2px solid #ccc;
	border-radius: 5px;
	background-color: transparent;
	width: calc(100% + 24px);
	height: 42px;
	padding: 6px 9px;
	font-size: 16px;
	transition: all 0.3 ease-in-out;
`;
export const Divider = styled.hr`
	width: 100%;
`;

// CONFIRM BUTTONS
export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px 0;
`;
export const Button = styled.button<PopupButton>`
	border: 0;
	outline: 0;
	border: 2px solid ${(props) => props.border};
	border-radius: 5px;
	font-size: 18px;
	width: fit-content;
    color: ${(props) => props.text};
    background: ${(props) => props.background};
	height: 40px;
	padding: 0 20px;
	margin: 0 5px;
	user-select: none;
	transition: all 0.3s ease-in-out;
    cursor: pointer;
	&:hover {
        border: 2px solid ${(props) => props.borderHover};
        color: ${(props) => props.textHover};
		background: ${(props) => props.backgroundHover};
	}
`;

// GROUPS
export const GroupsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    padding: 0 20px 0 20px;
	margin-right: 5px;
	max-height: 60vh;
	overflow: auto;

    ::-webkit-scrollbar-track,
	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 2px 2px transparent !important;
		-webkit-box-shadow: inset 0 0 2px 2px transparent !important;
		border-radius: 10px;
		background: transparent !important;
	}
	::-webkit-scrollbar,
	::-webkit-scrollbar {
		width: 12px;
		background-color: var(--dado-primary) !important;
		border-radius: 10px;
	}
	::-webkit-scrollbar-thumb,
	::-webkit-scrollbar-thumb {
		background-color: #ddd !important;
		border-radius: 10px;
	}
	::-webkit-scrollbar-thumb:hover,
	::-webkit-scrollbar-thumb:hover {
		background: #aaa !important;
	}
`;

export const Group = styled.div`
	border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px 0 10px 10px;

    & > h3 {
        margin: 0;

    }
`;

// FLOATING LABEL
export const FloatingLabel = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	& > label {
		position: absolute;
		color: #999;
		font-size: 16px;
		font-family: Arial, Helvetica, sans-serif;
		padding: 0 10px;
		pointer-events: none;
		transform: translate(0, 32px) scale(1);
		transform-origin: top left;
		transition: all 0.2s ease-out;
		@media screen and (max-width: 460px) {
			font-size: 12px;
			transform: translate(0, 22px) scale(1);
		}
	}
	&:focus-within > label {
		transform: translate(0, 8px) scale(0.75);
	}
	& > input {
		border: 0;
		outline: 0;
		border-bottom: 2px solid #ddd;
		background: transparent;
		padding: 14px 0 0 10px;
		width: 100%;
		height: 50px;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 16px;
		@media screen and (max-width: 460px) {
			font-size: 12px;
			height: 30px;
		}
	}
	.Active {
		transform: translate(0, 12px) scale(0.75);
		@media screen and (max-width: 460px) {
			transform: translate(0, 8px) scale(0.75);
		}
	}
	& > input:focus,
	& > input:active {
		border-bottom: 2px solid #de8667;
	}
`;
