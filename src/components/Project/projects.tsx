import React from 'react';
import { TechnologyTilt } from '../Technology/technologyTilt';
import Project from './project';
import { ProjectsContainer } from './project.styled';
import { ProjectsData } from './projectsData';

const Projects: React.FC = () => {
    React.useEffect(() => {
		TechnologyTilt('project', {
			max: 15,
			perspective: 1300,
			scale: 1,
			speed: 500,
		});
	}, []);

    return (
    <>
        <ProjectsContainer>
            {ProjectsData.map((project) => {
                const { id, image, date, title, description, link, tags } = project;
                return <Project key={id} image={image} date={date} title={title} description={description} link={link} tags={tags} />
            })}
        </ProjectsContainer>
    </>
  );
}

export default Projects;
