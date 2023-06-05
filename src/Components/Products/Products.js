import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductItem from './ProductItem/ProductItem'
import './Products.css'


const Products = () => {
    const ShowProduct = (id) => {
        console.log(id)
        setState({});
    }
    const [state, setState] = useState({
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
    });
    const Products = state.products.map((item) => {
        return <Link to={`/${item.id}`} key={item.id}>
                    <ProductItem
                        title={item.title}
                        price={item.price}
                        description={item.description}
                        buy={() => ShowProduct(item.id)}
                        save={() => ShowProduct(item.id)}
                    />
                </Link>
    });
    return (
        <div className='container rounded-2 p-3 d-flex flex-row justify-content-around align-items-center flex-wrap shadow'>
            {Products}
        </div>
    );
}
export default Products;