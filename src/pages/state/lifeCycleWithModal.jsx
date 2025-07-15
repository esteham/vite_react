import React, {useState} from 'react';
import ModalBox from './modalBox';

const LifeCycleWithModal = ()=>
{
    const [isOpen, setisOpen] = useState (false);

    return(
        <div>
            <h2>Modal Demo</h2>
            <button onClick={() => setisOpen(true)}>Open Modal</button>

            {isOpen && (
                <>
                    <ModalBox/>
                    <button onClick={() =>setisOpen(false)}>Close Modal</button>
                </>
            )}
        </div>
    );
};

export default LifeCycleWithModal;