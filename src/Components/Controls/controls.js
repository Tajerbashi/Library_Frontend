import React from 'react';
import './controls.css'
import Builder from './Builder/builder';

const Products = [
    { title: 'محصول 1', type: 'Product-1' },
    { title: 'محصول 2', type: 'Product-2' },
    { title: 'محصول 3', type: 'Product-3' },
    { title: 'محصول 4', type: 'Product-4' },
    { title: 'محصول 5', type: 'Product-5' }
];
const Controls = (props) => {
    return (
        <div className='controls'>
            {
                Products.map((item) => {
                    return <Builder
                        key={item.title}
                        title={item.title}
                        add={() => props.productAdd(item.type)}
                        remove={() => props.productRemove(item.type)}
                    />
                })
            }
        </div>
    );
};
export default Controls;