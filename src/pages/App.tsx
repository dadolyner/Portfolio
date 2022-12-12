import React from 'react';
import Popup from '../components/Popup/popup';

const App: React.FC = () => {
	return (
		<>
            <Popup
	            key={'registerPopup'}
	            active={true}
	            title={'Auth'}
	            size={700}
	            labelAligment={'center'}
	            onClose={() => console.log('Top Close Clicked')}
                groups={[
                    {
                        name: 'Register',
                        inputs: [
                            { type: 'text', name: 'first_name', label: 'First Name' },
                            { type: 'text', name: 'last_name', label: 'Last Name' },
                            { type: 'email', name: 'email', label: 'Email' },
                            { type: 'password', name: 'password', label: 'Password' },
                            { type: 'button', name: 'registerButton', value: 'Register', theme: { background: '#4568da', backgroundHover: '#ffffff', border: '#ffffff', borderHover: '#4568da', text: '#ffffff', textHover: '#4568da' } },
                        ]
                    },
                    {
                        name: 'Login',
                        inputs: [
                            { type: 'email', name: 'login_email', label: 'Email' },
                            { type: 'password', name: 'login_password', label: 'Password' },
                            { type: 'button', name: 'loginButton', value: 'login', theme: { background: '#4568da', backgroundHover: '#ffffff', border: '#ffffff', borderHover: '#4568da', text: '#ffffff', textHover: '#4568da' } },
                        ]
                    }
                     
                ]}                 
	            bottomButtons={[
                    { name: 'confirm', value: 'Confirm', onClick: () => console.log('Confirm Clicked'), theme: { background: '#4568da', backgroundHover: '#ffffff', border: '#ffffff', borderHover: '#4568da', text: '#ffffff', textHover: '#4568da' } },
                    { name: 'close', value: 'Close', onClick: () => console.log('Close Clicked'), theme: { background: '#a20f0f', backgroundHover: '#ffffff', border: '#ffffff', borderHover: '#a20f0f', text: '#ffffff', textHover: '#a20f0f' } },
                ]}
	            onConfirm={(values) => { console.log('Confirm clicked', values) }}
            />
		</>
	);
};

export default App;
