import styled, { keyframes } from 'styled-components';

type ProgressProps = {
    progress: number;
    backgroundColor: string;
    textColor?: string;
}

const progressSlide = (maxWidth: number) => keyframes`
    0% { width: 0%; }
	100% { width: ${maxWidth}%; }
`;

const percentageSlide = (maxWidth: number) => keyframes`
    0% { left: 0%; }
	100% { left: ${maxWidth}%; }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    margin: 0;
    padding: 10px;
`;

export const Percentage = styled.span<ProgressProps>`
    position: absolute;
    top: -40px;
    left: ${props => props.progress > 98 ? props.progress - 4 : props.progress -2}%;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.textColor};
    padding: 5px 10px;
    border-radius: 5px;
    animation: 2s ease-in-out 0s 1 ${props => percentageSlide(props.progress > 98 ? props.progress - 4 : props.progress -2)};
`;

export const ProgressContainer = styled.div`
    position: relative;
    width: 100%;
    height: 10px;
    background-color: #ddd;
`;

export const Progress = styled.div<ProgressProps>`
    width: ${props => props.progress}%;
    background-color: ${props => props.backgroundColor};
    box-shadow: 0 0 2px 0 ${props => props.backgroundColor};
    color: ${props => props.textColor};
    height: 100%;
    animation: 2s ease-in-out 0s 1 ${props => progressSlide(props.progress)};
`;