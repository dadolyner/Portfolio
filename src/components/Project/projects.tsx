import React from 'react';
import Project from './project';
import { ProjectsContainer } from './project.styled';
import { ProjectsData } from './projectsData';

const Projects: React.FC = () => {
    return (
    <>
        <ProjectsContainer>
            {ProjectsData.map((project) => {
                const { id, projectImage, projectReleaseDate, projectTitle, projectDescription, projectWebLink, projectGitLinkFE, projectGitLinkBE, projectColors, projectTags } = project;
                
                return <Project 
                    key={id} 
                    projectImage={projectImage} 
                    projectReleaseDate={projectReleaseDate} 
                    projectTitle={projectTitle} 
                    projectDescription={projectDescription} 
                    projectWebLink={projectWebLink} 
                    projectGitLinkFE={projectGitLinkFE} 
                    projectGitLinkBE={projectGitLinkBE} 
                    projectColors={projectColors} 
                    projectTags={projectTags} 
                />
            })}
        </ProjectsContainer>
    </>
  );
}

export default Projects;
