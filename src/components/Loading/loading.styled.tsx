import styled, { keyframes } from 'styled-components';

type LoadingProps = { theme: { color: string; background: string; }}

const spinning = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9000;
`

export const LoadingCircle = styled.div<LoadingProps>`
    width: 50px;
    height: 50px;
    border: 5px solid ${props => props.theme.background};
    border-top: 5px solid ${props => props.theme.color};
    border-radius: 50%;
    animation: ${spinning} 1.5s linear infinite;
`