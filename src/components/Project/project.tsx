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
				<ProjectImage>
					<img src={image} alt={title}  />
				</ProjectImage>

				<Content>
					<ProjectTimeAgo>{TimeAgo(date)}</ProjectTimeAgo>
					<ProjectTitle>{title}</ProjectTitle>
					<ProjectDescription>{description}</ProjectDescription>

                    <ProjectTags>
                        {tags.map((tag) => { return <Tag key={tag}>{tag}</Tag> })}
                    </ProjectTags>

                    <LinksContainer>
					    <VisitProject onClick={() => (window.location.href = link)}>Open Project</VisitProject>
                        <div></div>
                        <Github>G</Github>
                    </LinksContainer>
				</Content>
			</Container>
		</>
	);
};

export default Project;
