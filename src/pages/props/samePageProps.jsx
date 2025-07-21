import React from 'react';

const UserCard2 = ({name, email}) =>
{
    return (
        <div className='card2'>
            <h3>{name}</h3>
            <p>Email : {email}</p>
        </div>
    );
};

const Card2props = () =>
{
    return(
        <div>
			<h2>User List</h2>
			<UserCard2 name="Esteham" email="esteham@gmail.com" />
			<UserCard2 name="Ansari" email="ansari@gmail.com" />
		</div>
    );
};

export default Card2props;