import styled from 'styled-components';
import ColorScheme from '../../styles/colorScheme';

const { darkMode, lightMode } = ColorScheme;

export const Container = styled.div`
	background-color: ${lightMode.primary};
	color: ${lightMode.text};
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	border-right: 2px solid ${lightMode.text};
	width: 150px;
	height: 100%;
	padding: 10px;

	& > div {
		width: 100%;
	}

	&.dark {
		background-color: ${darkMode.primary};
		color: ${darkMode.text};
		border-right: 2px solid ${darkMode.text};
	}
`;

export const Title = styled.div`
    font-size: 2em;
`;

export const Image = styled.div``;

export const Links = styled.div``;

export const Social = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const SocialItem = styled.div`
	padding: 10px;
	width: 60px;
	height: 60px;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:hover {
		transform: scale(1.05);
	}
`;

export const Item = styled.div`
	text-align: center;
	width: 100%;
	padding: 10px 0;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:hover {
		transform: scale(1.1);
	}
`;
