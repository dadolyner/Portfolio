import styled, { keyframes } from 'styled-components';
import ColorScheme from '../../styles/colorScheme';

const { darkMode, lightMode } = ColorScheme;

type ProgressProps = {
    progress: number;
    color: string;
}

const progressSlide = (maxWidth: number) => keyframes`
    0% { width: 0%; }
	100% { width: ${maxWidth}%; }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    margin: 0;
    padding: 10px;
`;

export const ProgressContainer = styled.div`
    width: 100%;
    height: 5px;
    background-color: #ddd;
`;

export const Progress = styled.div<ProgressProps>`
    width: ${props => props.progress}%;
    background-color: ${props => props.color};
    box-shadow: 0 0 2px 0 ${props => props.color};
    height: 100%;
    animation: 2s ease-in-out 0s 1 ${props => progressSlide(props.progress)};
`;