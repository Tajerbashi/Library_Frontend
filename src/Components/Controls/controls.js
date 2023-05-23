import React from 'react';
import './controls.css'
import Builder from './Builder/builder';

const Products = [
    { title: 'محصول 1', type: 'محصول 1' },
    { title: 'محصول 2', type: 'محصول 2' },
    { title: 'محصول 3', type: 'محصول 3' },
    { title: 'محصول 4', type: 'محصول 4' },
    { title: 'محصول 5', type: 'محصول 5' }
];
const Controls = (props) => {
    return (
        <div className='controls'>
            <div>
                <p>قیمت نهایی : {props.price}</p>
            </div>
            {
                Products.map((item) => {
                    return <Builder
                        key={item.title}
                        title={item.title}
                        productPrice={() => props.productPrice(item.type)}
                        add={() => props.productAdd(item.type)}
                        remove={() => props.productRemove(item.type)}
                    />
                })
            }
            <div>
                <button onClick={props.axios} className='order-btn blue-dark'>AXIOS</button>
                <button onClick={props.fetch} className='order-btn blue-dark'>Fetch</button>
                <button onClick={props.modal} className='order-btn blue-light'>سبد سفارشات</button>
                <button onClick={props.modal} className='order-btn green-light'>سبد سفارشات</button>
                <button onClick={props.modal} className='order-btn green-dark'>سبد سفارشات</button>
            </div>
        </div>
    );
};
export default Controls;