import styled from 'styled-components';

type NavigationItems = {
    repeats: number;
	isOpen: boolean;
};

export const Container = styled.nav`
	padding: 0 32px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.2);
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: 20;
	background-color: #fff;
    font-family: 'Roboto', sans-serif;
	@media screen and (max-width: 900px) {
		display: grid;
		grid-template-columns: 50% 50%;
		align-items: center;
	}
`;

export const NavigationLogo = styled.div`
	padding: 16px 0;
	text-decoration: none;
	font-weight: 600;
	font-size: 26px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	&:hover { cursor: pointer; }
    & > h3 {
        margin: 0;
    }
`;

export const NavigationItems = styled.div<NavigationItems>`
	display: grid;
	grid-template-columns: repeat(${(props) => props.repeats}, 1fr);
	align-items: center;
	position: relative;
	@media screen and (max-width: 900px) {
		grid-template-columns: 100%;
		overflow: hidden;
		width: 100%;
		max-height: ${({ isOpen }) => (isOpen ? '400px' : '0')};
		transition: all 0.3s ease;
		grid-column: 1 / span 2;
		align-items: left;
	}
`;

export const Item = styled.a`
    padding: 0 10px;
	text-align: center;
	text-decoration: none;
	font-size: 16px;
	transition: all 0.3s ease;
	cursor: pointer;
	text-underline-offset: 5px;
	color: #000;
	&:hover { color: #EFB467; }
    @media screen and (max-width: 900px) {
        text-align: left;
        padding: 10px;
    }
`;

export const Hamburger = styled.div`
	border: 0;
	outline: 0;
	background: transparent;
	display: none;
	flex-direction: column;
	cursor: pointer;
	width: 40px;
	height: 30px;
	justify-self: end;
    opacity: 1;
	span {
		height: 2px;
		width: 25px;
		background: #000;
		margin-bottom: 5px;
	}

    &.opened {
        & > span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        & > span:nth-child(2) { opacity: 0; }
        & > span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
    }

	@media screen and (max-width: 900px) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const Lines = styled.span`
    transform-origin: center;
    transition: transform 0.3s ease-in-out, opacity 0.2s ease-in-out;
`;