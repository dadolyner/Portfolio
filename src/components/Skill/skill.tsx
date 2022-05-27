import React from 'react';
import { Container, Title, ProgressContainer, Progress, Percentage } from './skill.styled';
// <Skill type={'skill'} title={'ReactJS'} progress={80} backgroundColor={'#EFB467'} textColor={'#ffffff'}/>

type SkillProps = {
    type: 'tech' | 'skill';
    title: string;
    progress: number;
    backgroundColor: string;
    textColor?: string;
}

const Skill: React.FC<SkillProps> = (props: SkillProps) => {
    const { type, title, progress, backgroundColor, textColor } = props;
  return (
    <>
        <Container className={type} progress={progress}>
            <Title>{title}</Title>

            <ProgressContainer>
                <Percentage className={type} progress={progress} backgroundColor={backgroundColor} textColor={textColor}>{progress}%</Percentage>
                <Progress className={type} progress={progress} backgroundColor={backgroundColor}/>
            </ProgressContainer>
        </Container>
    </>
  );
}

export default Skill;
