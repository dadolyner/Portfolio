import React from 'react';
import Technologies from '../components/Technology/technologies';
import '../styles/GlobalStyles.css';

const App: React.FC = () => {
	return (
		<>
            <Technologies details={false}/>
		</>
	);
};

export default App;
