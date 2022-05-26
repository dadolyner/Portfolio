import React from 'react';
import { Container, ProjectImage, Content, ProjectTimeAgo, ProjectTitle, ProjectDescription, ProjectTags, Tag, LinksContainer, VisitProject, Github } from './project.styled';
import { TimeAgo } from './timeAgo';

type ProjectProps = {
	image: string;
	date: string;
	title: string;
	description: string;
	link: string;
    tags: string[];
};

const Project: React.FC<ProjectProps> = (props: ProjectProps) => {
	const { image, date, title, description, link, tags } = props;

	return (
		<>
			<Container className='project'>
				<ProjectImage className='image'>
					<img src={image} alt={title}  />
				</ProjectImage>

				<Content className='content'>
					<ProjectTimeAgo className='timeago'>{TimeAgo(date)}</ProjectTimeAgo>
					<ProjectTitle className='title'>{title}</ProjectTitle>
					<ProjectDescription className='desc'>{description}</ProjectDescription>

                    <ProjectTags className='tags'>
                        {tags.map((tag) => { return <Tag key={tag}>{tag}</Tag> })}
                    </ProjectTags>

                    <LinksContainer className='links'>
					    <VisitProject className='button' onClick={() => (window.location.href = link)}>Open Project</VisitProject>
                        <div></div>
                        <Github className='github'>G</Github>
                    </LinksContainer>
				</Content>
			</Container>
		</>
	);
};

export default Project;
