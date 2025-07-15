import React from 'react';
import './../css/propsCard.css'

const ChildProps = (props) => {
    return (
        <div className='propsCard'>   
            <div className='card'>
                <h3>Name : {props.name}</h3>
                <p>Email : {props.email}</p>
            </div>
        </div>
    );
};

export default ChildProps;


