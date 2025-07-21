import React, {useState, useEffect} from 'react';

const ModalBox = ()=>
{
    const [clickCount, setclickCount] = useState(0);

    //Mount & Unmount
    useEffect(()=>{
        console.log('Modal Mounted');

        return()=>
        {
            console.log('Modal Unmounted');
        }
    },[]);

    //Update
    useEffect(()=>{
        if(clickCount > 0)
        {
            console.log('Counter Update :', clickCount);
        }
    },[clickCount]);

    return (
        <div style={modalStyle}>
            <h3>This is modal</h3>
            <p>Click Counter :{clickCount}</p>
            <button onClick={()=>setclickCount(clickCount + 1)}>Click Here</button>
        </div>
    );
};

//Modal Style
const modalStyle = {
				
				background: 'white',
				padding: '20px',
				borderRadius: '10px',
				boxShadow: '0 0 10px gray',
				maxWidth: '300px',
				margin: '100px auto',
				textAlign: 'center'
};

export default ModalBox;