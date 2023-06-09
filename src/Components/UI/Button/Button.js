import React from 'react';
import './Button.css'
const Button = (props) => {
    return (<button onClick={props.click} className={`btn ${props.btnType}`}>{props.children}</button>);
}
export default Button;