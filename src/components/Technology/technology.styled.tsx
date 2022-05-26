import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
    flex-direction: row;
	flex-wrap: wrap;
	row-gap: 10px;
    column-gap: 20px;
    padding: 20px;
	justify-content: center;
    align-items: center;
`;

export const TechnologyContainer = styled.div`
	flex-direction: row;
    display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	position: relative;

	margin: 0;
	padding: 15px;
	background-color: #fff;

	height: 160px;
	width: 160px;
	border: 2px solid transparent;
	box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
	border-radius: 10px;

    transform-style: preserve-3d;

	&:hover {
		border: 2px solid #808080;
		transform: scale(1.1);
        cursor: pointer;

		& > img {
			filter: blur(5px) saturate(150%);
			transform: scale(1.2);
		}

		& > div {
			opacity: 1;
            transform: translateZ(50px);
		}
	}

    @media (max-width: 415px) {
        height: 160px;
	    width: 100%;
    }
`;

export const TechnologyImage = styled.img`
    max-width: 50%;
    max-height: 50%;
    user-select: none;
	transition: all 0.2s ease-in-out;
`;

export const TechnologyTitle = styled.div`
	opacity: 0;
	position: absolute;
	font-size: 1.5em;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
    user-select: none;
	transition: all 0.2s ease-in-out;
`;

export const GridBreak = styled.div`
    flex-basis: 100%;
    height: 0;

    @media (max-width: 768px) {
        display: none;
    }
`;
