import React from 'react';
import './Controls.css'
import Builder from './Builder/Builder';

const Products = [
    { title: 'محصول 1', type: 'محصول 1' },
    { title: 'محصول 2', type: 'محصول 2' },
    { title: 'محصول 3', type: 'محصول 3' },
    { title: 'محصول 4', type: 'محصول 4' },
    { title: 'محصول 5', type: 'محصول 5' },
];
const Controls = (props) => {
    return (
        <div className='controls'>
            <div>
                <p className='bg-gradient'>قیمت نهایی : {props.price}</p>
            </div>
            {
                Products.map((item) => {
                    return <Builder
                        key={item.type}
                        title={item.title}
                        productPrice={() => props.productPrice(item.type)}
                        add={() => props.productAdd(item.type)}
                        remove={() => props.productRemove(item.type)}
                    />
                })
            }
            <div>
                <ul className='control-list'>
                    <li>
                        <button onClick={props.axios} className='order-btn blue-dark'>AXIOS</button>
                    </li>
                    <li>
                        <button onClick={props.router} className='order-btn blue-light'>Router</button>
                    </li>
                    <li>
                        <a href='/Router' onClick={props.productRegister} className='order-btn green-light'>ثبت محصول</a>
                    </li>
                    <li>
                        <button onClick={props.modal} className='order-btn green-dark'>سبد سفارشات</button>

                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Controls;