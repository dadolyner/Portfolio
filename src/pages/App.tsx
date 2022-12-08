import React from 'react';
import Popup from '../components/Popup/popup';

const App: React.FC = () => {
	return (
		<>
            <Popup
	            key={'testPopup'}
	            active={true}
	            title={'Test Popup'}
	            size={700}
	            labelAligment={'center'}
	            onClose={() => console.log('Closed clicked')}
                groups={[
                    {
                        name: 'Group 1',
                        inputs: [
                            { type: 'text', name: 'text', label: 'Text' },
                            { type: 'number', name: 'number', label: 'Number' },
                            { type: 'email', name: 'email', label: 'Email' },
                            { type: 'password', name: 'password', label: 'Password' },
                            { type: 'tel', name: 'tel', label: 'Tel' },
                            { type: 'textarea', name: 'textarea', label: 'Textarea' },
                            { type: 'color', name: 'color', label: 'Color' },
                            { type: 'url', name: 'url', label: 'Url' },
                            { type: 'date', name: 'date', label: 'Date' },
                            { type: 'time', name: 'time', label: 'Time' },
                            { type: 'datetime-local', name: 'datetime-local', label: 'Datetime-local' },
                            { type: 'button', name: 'button', label: 'Button', value: 'Button', onClick: () => console.log('Button click') },
                            { type: 'dropdown', name: 'dropdown', label: 'Dropdown', options: [{ optionValue: 'Test Value', optionLabel: 'Test Label' }] },
                            { type: 'dropdown-search', name: 'dropdown-search', label: 'Dropdown-search', options: [{ optionValue: 'Test Value', optionLabel: 'Test Label' }] },
                            { type: 'html', name: 'html', label: 'Html', value: `<hr style="width: 100%;"/><h1>HTML</h1><hr style="width: 100%;"/>` },
                            { type: 'file', name: 'file', label: 'File' },
                            { type: 'range', name: 'range', label: 'Range' },
                            { type: 'checkbox', name: 'checkbox', label: 'Checkbox' },
                        ]
                    },
                    {
                        name: 'Group 2',
                        inputs: [
                            { type: 'email', name: 'login_email', label: 'Email' },
                            { type: 'password', name: 'login_password', label: 'Password' },
                        ],
                        theme: { background: '#000', border: '#fff', text: '#fff' }
                    }

                ]}
                    
	    bottomButtons={[
            { name: 'confirm', value: 'Confirm', onClick: () => {} },
            { name: 'close', value: 'Close', onClick: () => {} },
        ]}
	    onConfirm={(values) => { console.log('Confirm clicked', values) }}
/>
		</>
	);
};

export default App;
