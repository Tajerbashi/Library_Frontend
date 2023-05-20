import React from 'react';
import './controls.css'
import Builder from './Builder/builder';

const Products = [
    { title: 'محصول 1', type: 'Product1' },
    { title: 'محصول 2', type: 'Product2' },
    { title: 'محصول 3', type: 'Product3' },
    { title: 'محصول 4', type: 'Product4' },
    { title: 'محصول 5', type: 'Product5' }
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
        </div>
    );
};
export default Controls;