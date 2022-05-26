import * as React from 'react';
import { Container, NavigationLogo, NavigationItems, Item, Hamburger, Lines } from './navigation.styled';
// <Navigation />

const Navigation: React.FC = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<>
			<Container>
				<NavigationLogo onClick={() => {}}><h3>David Škulj</h3></NavigationLogo>

				<Hamburger onClick={() => setIsOpen(!isOpen)}>
					<Lines />
					<Lines />
					<Lines />
				</Hamburger>

				<NavigationItems isOpen={isOpen}>
					<Item onClick={() => { setIsOpen(false) }}>Home</Item>
					<Item onClick={() => { setIsOpen(false) }}>Settings</Item>
					<Item onClick={() => { setIsOpen(false) }}>Logout</Item>
				</NavigationItems>
			</Container>
		</>
	);
};

export default Navigation;