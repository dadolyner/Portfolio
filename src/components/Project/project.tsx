import React from 'react';
import { Container, ProjectImage, Content, ProjectTimeAgo, ProjectTitle, ProjectDescription, TagsTitle, ProjectTags, Tag, LinksContainer, VisitProject, Github } from './project.styled';
import { TimeAgo } from './timeAgo';

type ProjectProps = {
	projectImage: string;
	projectReleaseDate: string;
	projectTitle: string;
	projectDescription: string;
	projectWebLink: string;
	projectGitLink: string;
	projectColors: {
		text: string;
		textHover: string;
		background: string;
		backgroundHover: string;
	};
	projectTags: {
		name: string;
		textColor: string;
		backColor: string;
	}[];
};

const Project: React.FC<ProjectProps> = (props: ProjectProps) => {
	const { projectImage, projectReleaseDate, projectTitle, projectDescription, projectWebLink, projectGitLink, projectColors, projectTags } = props;
	const { text, textHover, background, backgroundHover } = projectColors;

	return (
		<>
			<Container className='project'>
				<ProjectImage style={{ background: `${background}` }}>
					<img src={projectImage} alt={projectTitle} />
				</ProjectImage>

				<Content>
					<ProjectTimeAgo>{TimeAgo(projectReleaseDate)}</ProjectTimeAgo>
					<ProjectTitle>{projectTitle}</ProjectTitle>
					<ProjectDescription>{projectDescription}</ProjectDescription>

					<ProjectTags>
                        <TagsTitle>Used technologies:</TagsTitle>
						{projectTags.map((tag) => { return ( <Tag key={tag.name} style={{ background: `${tag.backColor}`, color: `${tag.textColor}` }}>{tag.name}</Tag> ) })}
					</ProjectTags>

					<LinksContainer>
						<VisitProject textHover={textHover} backgroundHover={backgroundHover} onClick={() => window.open(projectWebLink)} style={{ background: `${background}`, color: `${text}` }}>
							View Project
						</VisitProject>
						<div></div>
						<Github onClick={() => window.open(projectGitLink)} style={{ border: `3px solid ${textHover}` }}></Github>
					</LinksContainer>
				</Content>
			</Container>
		</>
	);
};

export default Project;
