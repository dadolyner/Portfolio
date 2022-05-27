import styled, { keyframes } from 'styled-components';

type ProgressProps = {
    progress: number;
    backgroundColor?: string;
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

export const Container = styled.div<ProgressProps>`
    display: flex;
    flex-direction: column;

    &.tech {
        width: 80%;

        &:hover {
            & > div {
                & > div {
                    animation: 2s ease-in-out 0s 1 ${props => progressSlide(props.progress)};
                }
            }
        }
    }
`;

export const Title = styled.h4`
    margin: 0;
    padding: 10px;
    font-size: 18px;
`;

export const ProgressContainer = styled.div`
    position: relative;
    width: 100%;
    height: 10px;
    background-color: #ddd;
    margin: 0 0 70px 0;

    &.tech {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Percentage = styled.span<ProgressProps>`
    position: absolute;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.textColor};
    padding: 5px 10px;
    border-radius: 5px;
    
    &.tech {
        font-size: 16px;
        bottom: -50px;
        left: 0;
        right: 0;
        max-width: 60px;
        margin: 0 auto;
    }

    &.skill {
        top: -50px;
        left: ${props => props.progress > 98 ? props.progress - 4 : props.progress -2}%;
        animation: 2s ease-in-out 0s 1 ${props => percentageSlide(props.progress > 98 ? props.progress - 4 : props.progress -2)};
    }
`;

export const Progress = styled.div<ProgressProps>`
    width: ${props => props.progress}%;
    background-color: ${props => props.backgroundColor};
    box-shadow: 0 0 2px 0 ${props => props.backgroundColor};
    color: ${props => props.textColor};
    height: 100%;
`;