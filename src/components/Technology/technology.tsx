import React from 'react';
import { TechnologyContainer, TechnologyImage, TechnologyTitle } from './technology.styled';

type TexhnologyProps = {
    title?: string;
    image?: string;
}

const Technology: React.FC<TexhnologyProps> = (props: TexhnologyProps) => {
    const { title, image } = props;
	return (
        <>
            <TechnologyContainer className="technology">
                <TechnologyImage src={image} alt={title} />
                <TechnologyTitle>{title}</TechnologyTitle>
            </TechnologyContainer>
        </>
    );
};

export default Technology;
