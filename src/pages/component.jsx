import React  from 'react';

const Component  = () => {
  const name = "Xihad Ansari";
  const age = 25;
  const address = 'Dhaka, Bangladesh';
  const hobbies = ['Traveling','Rideing','Coding'];
  const isLoggedIn = false;
  const items = ["React", "javaScript", "CSS"];

  return (
    <>
      <h2>Welcome, {name}</h2>
      <p>Age : {age}</p>
      <p>Address : {address}</p>
      <p>Hobbies: {hobbies.join(', ')}</p>
      <p>{isLoggedIn ? "Logged In" : "Please Login"}</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Component ;