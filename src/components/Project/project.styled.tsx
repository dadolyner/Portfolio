import styled, { keyframes } from 'styled-components';

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
    width: 300px;
    height: 450px;
    margin: 5px;
    display: grid;
    grid-template-rows: 40% 60%;

    transform-style: preserve-3d;
    
    /* &:hover {
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
            z-index: -1;
            animation: ${rgbAnimatedBackground} 5s linear infinite;
        }
    } */

    &.image {}
    
    &.content.timeago {}
    &.content.title {}
    &.content.desc {}
    &.content.tags {}

    &.links.button {}
    &.links.github {}
`;

export const ProjectImage = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    height: 100%;
    background: linear-gradient(240deg, #efb467 0%, #de8667 100%);
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
    font-size: 14px;
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

export const Tag = styled.span`
    font-family: 'ComicMono';
    font-size: 14px;
    text-align: center;
    border: 1px solid #d6d6d6;
    border-radius: 10px;
    padding: 5px;
`;

export const LinksContainer = styled.div`
        position: absolute;
        bottom: 20px;
        right: 10px;
        left: 10px;
        display: grid;
        grid-template-columns: 75% 5% 20%;
`;

export const VisitProject = styled.button`
    outline: none;
	border: none;
	border-radius: 32px;
	height: 40px;
	font-size: 14px;
	font-weight: bold;
	background: linear-gradient(240deg, #efb467 0%, #de8667 100%);
	box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
	color: #fff;
	border: 1px solid #fff;
	cursor: pointer;
	transition: all 0.3s ease;
	&:hover {
		cursor: pointer;
		background: #fff;
		color: #efb467;
		border: 1px solid #efb467;
		transform: scale(1.02);
	}
`;

export const Github = styled.button``;