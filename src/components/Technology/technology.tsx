import React from 'react';
import Skill from '../Skill/skill';
import { TechnologyContainer, TechnologyImage, TechnologyTitle } from './technology.styled';

type TexhnologyProps = {
    title?: string;
    image?: string;
    progress: number;
    backgroundColor: string;
    textColor: string;
    details?: boolean;
}

const Technology: React.FC<TexhnologyProps> = (props: TexhnologyProps) => {
    const { title, image, progress, backgroundColor, textColor, details } = props;
	return (
        <>
            <TechnologyContainer className={`technology ${details ? 'detailed' : 'hoverable'}`}>
                <TechnologyImage src={image} alt={title} />
                <TechnologyTitle>         
                    <Skill type={'tech'} title={title} progress={progress} backgroundColor={backgroundColor} textColor={textColor} />
                </TechnologyTitle>
            </TechnologyContainer>
        </>
    );
};

export default Technology;
