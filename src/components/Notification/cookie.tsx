import * as React from 'react';
import { BottomNotificationPopup, CookieTitle, CokkieContent, BottomButtons, CustomLink, ConfirmButton } from './notifications.styled';
// <Cookie title={'Your cookie settings'} content={'We use cookies to personalize your experiance. By continuing to visit this website you agree to our use of cookies.'} buttonText={'GOT IT'} linkText={'Read Our Cookie Policy'} linkLocation={'cookies'} />


type TopNotificationProps = {
	title: string;
	content: string;
	buttonText: string;
	linkText: string;
	linkLocation: string;
};

const Cookie: React.FC<TopNotificationProps> = (props: TopNotificationProps) => {
	const { title, content ,linkText, linkLocation, buttonText } = props;
	const [hide, setHide] = React.useState(true);
	const [animation, setAnimation] = React.useState(true);
	
    // If its hidden
    if (hide) {
		return (
			<>
				<BottomNotificationPopup className={animation ? '' : 'hide'}>
					<CookieTitle><h1>{title}</h1></CookieTitle>
					<CokkieContent><p>{content}</p></CokkieContent>
					
					<BottomButtons>
						<CustomLink href={linkLocation}>{linkText}</CustomLink>
						<ConfirmButton onClick={() => { setAnimation(false); setTimeout(() => {setHide(false);}, 100) }}>{buttonText}</ConfirmButton>
					</BottomButtons>
				</BottomNotificationPopup>
			</>
		);
	} 
		
	// Return Nothing
	else {
		return null;
	}
	
};

export default Cookie;
