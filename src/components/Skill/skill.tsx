import React from 'react';
import { Container, Title, ProgressContainer, Progress, Percentage } from './skill.styled';
// <Skill title={'ReactJS'} progress={80} backgroundColor={'#EFB467'} textColor={'#ffffff'}/>

type SkillProps = {
    title: string;
    progress: number;
    backgroundColor: string;
    textColor?: string;
}

const Skill: React.FC<SkillProps> = (props: SkillProps) => {
    const { title, progress, backgroundColor, textColor } = props;
  return (
    <>
        <Container>
            <Title>{title}</Title>

            <ProgressContainer>
                <Percentage progress={progress} backgroundColor={backgroundColor} textColor={textColor}>{progress}%</Percentage>
                <Progress progress={progress} backgroundColor={backgroundColor}/>
            </ProgressContainer>
        </Container>
    </>
  );
}

export default Skill;
