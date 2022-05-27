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
                    const { title, image, progress, backgroundColor, textColor } = tech;
					if (title.includes('Break')) return <GridBreak key={title} />;
					else {
						if (title.includes('Break')) return null;
						else return <Technology key={title} title={title} image={image} progress={progress} backgroundColor={backgroundColor} textColor={textColor} details={false}/>;
					}
				})}
			</Container>
		</>
	);
};

export default Technologies;
