import React from 'react';
import { TechnologyTilt } from '../Technology/technologyTilt';
import Project from './project';
import { ProjectsContainer } from './project.styled';
import { ProjectsData } from './projectsData';

const Projects: React.FC = () => {
    // React.useEffect(() => {
	// 	TechnologyTilt('project', {
	// 		max: 15,
	// 		perspective: 2000,
	// 		scale: 1.1,
	// 		speed: 500,
	// 	});
	// }, []);

    return (
    <>
        <ProjectsContainer>
            {ProjectsData.map((project) => {
                const { id, projectImage, projectReleaseDate, projectTitle, projectDescription, projectWebLink, projectGitLink, projectColors, projectTags } = project;
                
                return <Project 
                    key={id} 
                    projectImage={projectImage} 
                    projectReleaseDate={projectReleaseDate} 
                    projectTitle={projectTitle} 
                    projectDescription={projectDescription} 
                    projectWebLink={projectWebLink} 
                    projectGitLink={projectGitLink} 
                    projectColors={projectColors} 
                    projectTags={projectTags} 
                />
            })}
        </ProjectsContainer>
    </>
  );
}

export default Projects;
