import React from 'react';
import { Container, Title, ProgressContainer, Progress } from './skill.styled';

type SkillProps = {
    title: string;
    progress: number;
    color: string;
}

const Skill: React.FC<SkillProps> = (props: SkillProps) => {
    const { title, progress, color } = props;
  return (
    <>
        <Container>
            <Title>{title}</Title>
            
            <ProgressContainer>
                <Progress progress={progress} color={color}/>
            </ProgressContainer>
        </Container>
    </>
  );
}

export default Skill;
