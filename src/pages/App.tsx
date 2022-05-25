import React from 'react';
import  Navigation from '../components/Navigation/navigation';
import Technologies from '../components/Technology/technologies';
import {DadoPortfolio, NavigationContainer, BodyContainer} from '../styles/app.styled'
import '../styles/GlobalStyles.css'

const App: React.FC = () => {
  return (
    <>
        <DadoPortfolio>
            <NavigationContainer>
                <Navigation darkMode={true} />
            </NavigationContainer>

            <BodyContainer>
                <Technologies />
            </BodyContainer>
        </DadoPortfolio>

          
    </>
  );
}

export default App;
