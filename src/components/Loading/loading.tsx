import * as React from 'react';
import { Container, LoadingCircle } from './loading.styled';
// <Loading color={'#de8667'} background={'#f3f3f3'} />

type LoadingProps = { color: string; background: string; }

const Loading: React.FC<LoadingProps> = (props: LoadingProps) => {
    const { color, background } = props
    const theme = { color, background }
	
	return (
		<>
			<Container>
				<LoadingCircle theme={theme} />
			</Container>
		</>
	);
};

export default Loading;
