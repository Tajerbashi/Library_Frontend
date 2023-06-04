import { useState } from 'react'
import ProductItem from './ProductItem/ProductItem'
import './Products.css'
const Products = () => {
    const [state, setState] = useState({
        products: [
            {
                title: 'چهار اثر فلورانس',
                price: 150,
                description: 'این کتاب در  مورد ذهنیت الهی بحث میکند'
            },
            {
                title: 'اثر مرکب',
                price: 180,
                description: 'این کتاب در  مورد ذهنیت الهی بحث میکند'
            },
            {
                title: 'قدرت نامحدود',
                price: 200,
                description: 'این کتاب در  مورد ذهنیت الهی بحث میکند'
            },
            {
                title: 'ثروتمند ترین مرد بابل',
                price: 80,
                description: 'این کتاب در  مورد ذهنیت الهی بحث میکند'
            },
            {
                title: 'جادوی فکر یزرگ',
                price: 120,
                description: 'این کتاب در  مورد ذهنیت الهی بحث میکند'
            },
            {
                title: 'تغییرات کوچک',
                price: 170,
                description: 'این کتاب در  مورد ذهنیت الهی بحث میکند'
            },
            {
                title: 'افکار یا فکر یزرگ',
                price: 300,
                description: 'این کتاب در  مورد ذهنیت الهی بحث میکند'
            },
        ],
    });
    const Products = state.products.map((item) => {
        return <ProductItem 
        title={item.title} 
        price={item.price} 
        description={item.description} 
        
        />
    });
    return (
        <div className='container rounded-2 p-3 d-flex flex-row justify-content-around align-items-center flex-wrap shadow'>
            {Products}
        </div>
    );
}
export default Products;