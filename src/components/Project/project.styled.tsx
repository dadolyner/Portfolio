import styled, { keyframes } from 'styled-components';
import { GithubLogo } from '../../images/ImageExporter'

const rgbAnimatedBackground = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`;

export const ProjectsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 20px;
    column-gap: 20px;
`;

export const Container = styled.div`
    position: relative;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
    width: 260px;
    height: 450px;
    margin: 5px;
    display: grid;
    grid-template-rows: 40% 60%;

    transform-style: preserve-3d;
    transition: all 0.3s ease-in-out;
    
    &:hover {
        transform: scale(1.05);
        &::after {
            content:"";
            background: linear-gradient(45deg,
            #ff0000 0%, 
            #ff9a00 10%,
            #d0de21 20%,
            #4fdc4a 30%, 
            #3fdad8 40%,
            #2fc9e2 50%, 
            #1c7fee 60%, 
            #5f15f2 70%, 
            #ba0cf8 80%, 
            #fb07d9 90%, 
            #ff0000 100%  )
            repeat 0% 0% / 300% 100%;
            position: absolute;
            inset: -5px;
            border-radius: 10px;
            filter: blur(5px);
            transform: translateZ(-100px);
            z-index: -1;
            animation: ${rgbAnimatedBackground} 3s linear infinite;
        }
    }
`;

export const ProjectImage = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    height: 100%;
    background: #ccc;
    border-radius: 10px 10px 0 0;

    & > img {
        max-width: 90%;
        max-height: 90%;
        border-radius: 5px;
    }
`;

export const Content = styled.div`
    border-top: 1px solid #e6e6e6;
    position: relative;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
`;

export const ProjectTimeAgo = styled.div`
    font-family: 'ComicMono';
    font-size: 12px;
`;

export const ProjectTitle = styled.h3`
    margin: 0;
`;

export const ProjectDescription = styled.p`
    margin: 0;
    font-size: 13px;
`;


export const ProjectTags = styled.div`
    position: absolute;
    bottom: 70px;
    left: 20px;
    right: 20px;
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5px;
`;

export const TagsTitle = styled.h5`
    margin: 0;
    grid-column: 1 / span 3;
`;

export const Tag = styled.span`
    font-family: 'ComicMono';
    font-size: 14px;
    text-align: center;
    border: 1px solid #d6d6d6;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.3);
    user-select: none;
`;

export const LinksContainer = styled.div`
        position: absolute;
        bottom: 20px;
        right: 10px;
        left: 10px;
        display: grid;
        grid-template-columns: 75% 5% 20%;
`;

type VisitProjectButtonProps = {
    textHover: string;
    backgroundHover: string;
}
export const VisitProject = styled.button<VisitProjectButtonProps>`
    outline: none;
	border: none;
	border-radius: 32px;
	height: 40px;
	font-size: 14px;
	font-weight: bold;
	background: #ccc;
	box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
	color: #fff;
	border: 1px solid #fff;
	cursor: pointer;
	transition: all 0.3s ease;
	&:hover {
		cursor: pointer;
		background: ${props => props.backgroundHover + ' !important'};
		color: ${props => props.textHover + ' !important'};
		border: ${props => '1px solid ' + props.textHover + ' !important'};
		transform: scale(1.02);
	}
`;

export const Github = styled.button`
    outline: none;
    border: none;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    background-image: url(${GithubLogo});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;