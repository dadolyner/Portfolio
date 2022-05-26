import React from 'react';
import { Container, GridBreak } from './technology.styled';
import Technology from './technology';
import { TexhnologyData } from './technologyData';
import { TechnologyTilt } from './technologyTilt';

const Technologies: React.FC = () => {
	React.useEffect(() => {
		TechnologyTilt('technology', {
			max: 15,
			perspective: 500,
			scale: 1.1,
			speed: 500,
		});
	}, []);

	return (
		<>
			<Container>
				{TexhnologyData.map((tech) => {
					if (tech.title.includes('Break')) return <GridBreak key={tech.title} />;
					else {
						if (tech.title.includes('Break')) return null;
						else return <Technology key={tech.title} title={tech.title} image={tech.image} />;
					}
				})}
			</Container>
		</>
	);
};

export default Technologies;
