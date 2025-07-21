import React, { useState } from 'react';

const Event = () =>
{
	const [form, setForm] = useState({name: '', email: ''});

	const handleChange = e =>{
								const {name, value} = e.target;
								setForm(prev => ({...prev, [name]: value}));
							 };
	const handleSubmit = e => {

								e.preventDefault();

								alert(`Hello ${form.name}, we received your email: ${form.email}`);
								};
			return (
                    <div>
                        <h2>Event</h2>
						<form onSubmit={handleSubmit}>
							<input style={{ padding:'10px', marginBottom:'2px'}}
								name="name" value={form.name} onChange={handleChange} placeholder="Enter name" /><br />
							<input style={{ padding:'10px',}}
								name="email"
								value={form.email}
								onChange={handleChange}
								placeholder="Enter Email" /><br /><br/>

							<button type="submit">Submit</button>
						</form>
                    </div>
					);
};

export default Event;