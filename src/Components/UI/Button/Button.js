import React from 'react';
import './Button.css'
const Button = (props) => {
    return (<button onClick={props.click} className={`btn ${props.btnType} w-${props.with}`}>{props.children}</button>);
}
export default Button;