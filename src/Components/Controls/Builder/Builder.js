import React from 'react';
import './Builder.css'

const Builder = (props) => {
    return (
        <div className='builder'>
            <div className='builder-info'>
                <span className='builder-info-span' >نام : {props.title}</span>
                <span className='builder-info-span' >قیمت : {props.productPrice()}</span>
            </div>
            <div className='builder-control'>
                <button className='builder-btn' onClick={props.add}> اضافه </button>
                <button className='builder-btn' onClick={props.remove}> حذف </button>
            </div>
        </div>
    );
}
export default Builder;