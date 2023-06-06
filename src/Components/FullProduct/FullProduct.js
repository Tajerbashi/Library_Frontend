
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './FullProduct.css'
const FullProduct = (props) => {
    const [state, setState] = useState(null);
    const str = state;
    let data = {
        loadedPost: null,
        found: false,
        products: [
            {
                id: 1,
                title: 'چهار اثر فلورانس',
                price: 150,
                description: 'این کتاب در  مورد ذهنیت الهی بحث میکند'
            },
            {
                id: 2,
                title: 'اثر مرکب',
                price: 180,
                description: 'این کتاب در  مورد ذهنیت الهی بحث میکند'
            },
            {
                id: 3,
                title: 'قدرت نامحدود',
                price: 200,
                description: 'این کتاب در  مورد ذهنیت الهی بحث میکند'
            },
            {
                id: 4,
                title: 'ثروتمند ترین مرد بابل',
                price: 80,
                description: 'این کتاب در  مورد ذهنیت الهی بحث میکند'
            },
            {
                id: 5,
                title: 'جادوی فکر یزرگ',
                price: 120,
                description: 'این کتاب در  مورد ذهنیت الهی بحث میکند'
            },
            {
                id: 6,
                title: 'تغییرات کوچک',
                price: 170,
                description: 'این کتاب در  مورد ذهنیت الهی بحث میکند'
            },
            {
                id: 7,
                title: 'افکار یا فکر یزرگ',
                price: 300,
                description: 'این کتاب در  مورد ذهنیت الهی بحث میکند'
            },
        ],
        product: {
            id: 0,
            title: '',
            description: '',
            price: 0
        }
    };
    console.log(state);
    useEffect(() => {
        const queryString = window.location.pathname;
        const id = queryString.substring(1,);
        let product;
        product = data.products.find(item => {
            if (item.id == id) {
                return item;
            }
        });
        if (product != undefined) {
            setState({ found: true ,product: product });
        } else {
            setState({ found: false, product: product });
        }
    }, []);
    if (state == null) {
        return 'loading ...'
    }
    return (
        state.found ?
            <div className='fullProduct'>
                <h6 className='fullProduct-title'>{state.product.title}</h6>
                <div className='d-flex flex-row justify-content-between fullProduct'>
                    <div className='fullProduct-img'>
                    </div>
                    <div className='fullProduct-section'>
                        <p className='fullProduct-content'>{state.product.description}</p>
                        <p className='fullProduct-price'>{state.product.price}  هزار تومان</p>
                    </div>
                </div>
                <Link to='/products'>
                    <button className='fullProduct-btn'>
                        برگشت
                    </button>
                </Link>
            </div>
            :
            <h1  className='notFound'>
                پست موجود نیست
            </h1>
    );
}
export default FullProduct;

//  : {<h1 style={{
//         color: 'red',
//         backgroundColor: 'black',
//         margin: '1rem',
//         padding: '1rem',
//         borderRadius: '1rem'
//     }}>پست مورد نظر یافت نشد !!!!</h1>};
