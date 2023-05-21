import React from 'react';
import './BackDrop.css'
const BackDrop = (props) => {
    return(
        props.show ? <div onClick={props.showHandler} className='back-drop'></div> : null
    );
}
export default BackDrop;