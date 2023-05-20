import React from 'react';
import './builder.css'

const Builder = (props) => {
    return (
        <div className='builder'>
            <div> 
                <span>نام : {props.title}</span>
                <span>قیمت : {props.productPrice()}</span>
            </div>
            <button onClick={props.add}> اضافه </button>
            <button onClick={props.remove}> حذف </button>
        </div>
    );
}
export default Builder;