import React from 'react';
import { Container, Title, Image, Links, Social, SocialItem, Item } from './navigation.styled';
import { FacebookDark, TwitterDark, InstagramDark, SnapchatDark, FacebookLight, TwitterLight, InstagramLight, SnapchatLight } from '../../images/ImageExporter'

type NavigationProps = {
	darkMode: boolean
}

const Navigation: React.FC<NavigationProps> = (props: NavigationProps) => {
	const { darkMode } = props;

	return (
		<>
			<Container className={darkMode ? 'dark' : ''}>
				<Image>
					<Item><Title>David Škulj</Title></Item>
				</Image>

				<Links>
					<Item>About</Item>
					<Item>Skills</Item>
					<Item>Projects</Item>
					<Item>Contact</Item>
				</Links>

				<Social>
					<SocialItem><img src={ darkMode ? FacebookDark : FacebookLight } alt={'Facebook.png'} width={40} height={40}/></SocialItem>
					<SocialItem><img src={ darkMode ? TwitterDark : TwitterLight } alt={'Twitter.png'} width={40} height={40}/></SocialItem>
					<SocialItem><img src={ darkMode ? InstagramDark : InstagramLight } alt={'Instagram.png'} width={40} height={40}/></SocialItem>
					<SocialItem><img src={ darkMode ? SnapchatDark : SnapchatLight } alt={'Snapchat.png'} width={40} height={40}/></SocialItem>
				</Social>
			</Container>
		</>
	);
};

export default Navigation;
