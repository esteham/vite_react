import React, { useEffect, useState} from 'react';

const ApiConnect = ()=>
{
    const [Users, setUsers] = useState([]);

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data));
    },[]);

    return(
         <div>
            <h3>User List</h3>
            <table border="1" cellPadding="8" cellSpacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {Users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>{user.company?.name}</td>
                            <td>{user.address?.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default ApiConnect;