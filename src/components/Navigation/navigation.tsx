import * as React from 'react';
import { Container, NavigationLogo, NavigationItems, Item, Hamburger, Lines } from './navigation.styled';

// const navigation = {
//     title: 'David Škulj',
//     items: [
//         { name: 'Home', onClick: () => console.log('Home') },
//         { name: 'Projects', onClick: () => console.log('Projects') },
//         { name: 'Technologies', onClick: () => console.log('Technologies') },
//         { name: 'About me', onClick: () => console.log('About me') }
//     ]
// }
// <Navigation title={navigation.title} items={navigation.items} />

type NavigationProps = {
    title: string;
    items: {
        name: string;
        onClick: () => void;
    }[]
}
const Navigation: React.FC<NavigationProps> = (props: NavigationProps) => {
	const [isOpen, setIsOpen] = React.useState(false);
    const { title, items } = props;

	return (
		<>
			<Container>
				<NavigationLogo onClick={() => {}}><h3>{title}</h3></NavigationLogo>

				<Hamburger className={isOpen ? 'opened' : ''} onClick={() => setIsOpen(!isOpen)}>
					<Lines />
					<Lines />
					<Lines />
				</Hamburger>

				<NavigationItems isOpen={isOpen} repeats={4}>
					{ items.map((item: any) => {
                            const { name, onClick } = item;
                            return <Item key={name} onClick={() => { setIsOpen(false); onClick() }}>{name}</Item>
                        })
                    }
				</NavigationItems>
			</Container>
		</>
	);
};

export default Navigation;