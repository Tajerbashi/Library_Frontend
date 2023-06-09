import { useState } from 'react'
import './Products.css'
import Product from '../Product/Product';
import Navbar from '../../../Home/Container/Navbar/Navbar'
import Wrapper from '../../../../HOC/wrapper'
const Products = () => {
    const Products = [
        {
            id: 1,
            title: "محصول 1",
            description: "این متن تستی است و برای نمایش یک متن تستی ایجاد شده است و دیگر هیچ اعتبار ندارد",
            price: 2500000
        },
        {
            id: 2,
            title: "محصول 2",
            description: "این متن تستی است و برای نمایش یک متن تستی ایجاد شده است و دیگر هیچ اعتبار ندارد",
            price: 1500000
        },
        {
            id: 3,
            title: "محصول 3",
            description: "این متن تستی است و برای نمایش یک متن تستی ایجاد شده است و دیگر هیچ اعتبار ندارد",
            price: 420000
        },
        {
            id: 4,
            title: "محصول 4",
            description: "این متن تستی است و برای نمایش یک متن تستی ایجاد شده است و دیگر هیچ اعتبار ندارد",
            price: 2000000
        },
        {
            id: 5,
            title: "محصول 5",
            description: "این متن تستی است و برای نمایش یک متن تستی ایجاد شده است و دیگر هیچ اعتبار ندارد",
            price: 800000
        },
        {
            id: 6,
            title: "محصول 6",
            description: "این متن تستی است و برای نمایش یک متن تستی ایجاد شده است و دیگر هیچ اعتبار ندارد",
            price: 2200000
        },
        {
            id: 7,
            title: "محصول 7",
            description: "این متن تستی است و برای نمایش یک متن تستی ایجاد شده است و دیگر هیچ اعتبار ندارد",
            price: 2700000
        },
    ];
    const [products, setProducts] = useState(Products);
    const AllProducts = products.map(item => {
        return (<Product
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            click={() => productsHandler(item.id)}
        />);
    });
    const productsHandler = (id) => {
        console.log("Id : ",id);
    }
    return (
        <Wrapper>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <Navbar />
                    </div>
                </div>
                <div className='row DefaultContainer m-1'>
                    <div className='col-12 d-flex flex-row justify-content-between align-items-center flex-wrap'>
                        {AllProducts}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
export default Products