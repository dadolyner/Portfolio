import * as React from 'react';
import { Container, NavigationLogo, NavigationItems, Item, Hamburger, Lines } from './navigation.styled';
// <Navigation />

const Navigation: React.FC = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<>
			<Container>
				<NavigationLogo onClick={() => {}}><h3>David Škulj</h3></NavigationLogo>

				<Hamburger className={isOpen ? 'opened' : ''} onClick={() => setIsOpen(!isOpen)}>
					<Lines />
					<Lines />
					<Lines />
				</Hamburger>

				<NavigationItems isOpen={isOpen}>
					<Item onClick={() => { setIsOpen(false) }}>Home</Item>
					<Item onClick={() => { setIsOpen(false) }}>Projects</Item>
					<Item onClick={() => { setIsOpen(false) }}>Technologies</Item>
					<Item onClick={() => { setIsOpen(false) }}>About me</Item>
				</NavigationItems>
			</Container>
		</>
	);
};

export default Navigation;