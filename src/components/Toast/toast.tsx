import * as React from 'react';
import { ToastPopup, Close, IconContainer, Icon, Content, ContentTitle, ContentText } from './toast.styled';

type ToastProps = {
	type: 'success' | 'error' | 'info' | 'warning';
	message: string;
    timeout: number;
};

const Toast: React.FC<ToastProps> = (props: ToastProps) => {
    const { type, message, timeout } = props;
    
    const [hide, setHide] = React.useState(true);
	const [animation, setAnimation] = React.useState(true);
	const [widthTimer, setWidthTimer] = React.useState(100);
    
	const closeToast = setTimeout(() => { setAnimation(false); setTimeout(() => { setHide(false);}, 100) }, timeout);
	const countdownTimer = setTimeout(() => { setWidthTimer(widthTimer - 1) }, timeout / 110)
	

	if (hide) {
		return (
			<>
				<ToastPopup className={[animation ? type : 'hide'].join("")}>
					<IconContainer>
                        <Icon className={type}></Icon>
                        </IconContainer>

					<Content>
						<ContentTitle>{type.charAt(0).toUpperCase() + type.slice(1)}</ContentTitle>
						<ContentText>{message}</ContentText>
					</Content>

					<Close className={type} onClick={() => { clearTimeout(closeToast); clearTimeout(countdownTimer); setAnimation(false); setTimeout(() => { setHide(false) }, 100) }}><div>&times;</div></Close>
				</ToastPopup>
			</>
		);
	} else { return null; }
};

export default Toast;