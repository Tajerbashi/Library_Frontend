import React, { useState } from 'react'
import Wrapper from '../../Hoc/wrapper';
import './ProductRegister.css'
import axios from '../../Services/Order/orderServices'

const ProductRegister = (props) => {
    const [state, setState] = useState({
        product: {
            name: '',
            price: ''
        },
        loading: false
    });
    const DefineProduct = (event) => {
        const name = event.target.name;
        if (name === 'name') {
            const product = {
                name: event.target.value,
                price: state.product.price
            }
            setState({ product: product });
        } else if (name === 'price') {
            const product = {
                name: state.product.name,
                price: event.target.value
            }
            setState({ product: product });
        }
        console.log('Event : ', state.product);
    }
    const RegisterProductHandler = () => {
        var data = state.product;
        console.log(state.product);
        axios
            .post('/Products.json', data)
            .then((res) => {
                console.log("Res : ", res);
            })
            .catch(err => {
                console.log("Err : ", err);
            });
    }

    return (
        <Wrapper>
            <div className='pr-title'>محصول جدید</div>
            <div className='pr-form'>
                <input
                    className='pr-input'
                    placeholder='نام محصول را وارد کنید ...'
                    onChange={DefineProduct}
                    name='name'
                    type='text' />
                <input
                    className='pr-input'
                    placeholder='قیمت محصول را وارد کنید ...'
                    onChange={DefineProduct}
                    name='price'
                    type='text'
                />
            </div>
            <div className='pr-controller'>
                <button
                    className='pr-btn'
                    onClick={RegisterProductHandler}
                >ذخیره</button>
            </div>
        </Wrapper>
    );
}
export default ProductRegister;