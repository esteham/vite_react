import React, {useState} from 'react';

const NameInput = () =>
{
	const [name, setName] = useState('');

	return (
			 <div style={{ padding: '20px', fontFamily: 'Arial' }}>
			 	<h2>Enter Your Name:</h2>
			 	<input type="text" value={name} onChange={ e => setName(e.target.value)} placeholder="Type Your Name" style={{ padding: '8px', width: '250px'}} />

			 	<p style={{ marginTop: '20px'}}>{name ? `Hello, ${name}!` : 'Waiting for input...'}</p>
			 </div>
			);
};

export default NameInput;