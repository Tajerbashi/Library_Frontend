
import React from 'react';
import { Link } from 'react-router-dom';

import './FullProduct.css'
class FullProduct extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    state = {
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
            title: '',
            content: '',
            price: 0
        }
    }
    componentDidMount() {
        const queryString = window.location.pathname;
        let product = null;
        const id = queryString.substring(1,);
        product = this.state.products.find(item => {
            if (item.id == id) {
                return item;
            }
        });
        this.setState({ found: true });
        console.log(product);
        // this.setState({product: product});
        if (product != undefined) {
            this.setState({ found: true });
            console.log(product);
            this.setState({product: product});
        } else {
            this.setState({ found: false });
        }
    }
    render() {
        let post = this.state.found ?
            (
                <div className='fullProduct'>
                    <h6 className='fullProduct-title'>{this.state.product.title}</h6>
                    <div className='d-flex flex-row justify-content-between fullProduct'>
                        <div className='fullProduct-img'>
                        </div>
                        <div className='fullProduct-section'>
                            <p className='fullProduct-content'>{this.state.product.description}</p>
                            <p className='fullProduct-price'>{this.state.product.price}</p>
                        </div>
                    </div>
                    <Link to='/products'>
                        <button className='fullProduct-btn'>
                            برگشت
                        </button>
                    </Link>
                </div>
            )
            : <h1 style={{
                color: 'red',
                backgroundColor: 'black',
                margin: '1rem',
                padding: '1rem',
                borderRadius: '1rem'
            }}>پست مورد نظر یافت نشد !!!!</h1>;
        return (
            post
        );
    }

}
export default FullProduct;