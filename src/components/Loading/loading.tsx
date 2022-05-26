import * as React from 'react';
import { Container, LoadingCircle } from './loading.styled';
// <Loading isLoading={true} loadingBarColor={'#de8667'} loadingBarBackgroundColor={'#f3f3f3'} />

type LoadingProps = {
	  isLoading: boolean
      loadingBarColor?: string
      loadingBarBackgroundColor?: string
}

const Loading: React.FC<LoadingProps> = (props: LoadingProps) => {
    const { isLoading } = props
    let { loadingBarColor, loadingBarBackgroundColor } = props
    loadingBarColor = loadingBarColor ? loadingBarColor : '#de8667'
    loadingBarBackgroundColor = loadingBarBackgroundColor ? loadingBarBackgroundColor : '#f3f3f3'
	
    if(isLoading) {
		return (
			<>
				<Container>
					<LoadingCircle style={{ border: `5px solid ${loadingBarBackgroundColor}`, borderTop: `5px solid ${loadingBarColor}` }}/>
				</Container>
			</>
		);
	} else {
		return null;
	}
};

export default Loading;
