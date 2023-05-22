import React from 'react'
import './Input.css'

const Input = (props) => {
    return (
        <input
            type='text'
            className={`input-text ${props.inputStyle}`}
            placeholder={props.holder} />
    );
}
export default Input;