import { useState } from "react";
import ProductItem from "../Products/ProductItem/ProductItem";
const Percents = (props) => {
    const [state, setState] = useState({
        products: [
            {
                id: 1,
                title: 'چهار اثر فلورانس',
                price: 120,
                oldprice: 150,
                percent: true,
                description: 'این کتاب در  مورد ذهنیت الهی بحث میکند'
            },
            {
                id: 2,
                title: 'اثر مرکب',
                percent: true,
                oldprice: 180,
                price: 160,
                description: 'این کتاب در  مورد ذهنیت الهی بحث میکند'
            },
            {
                id: 3,
                title: 'قدرت نامحدود',
                percent: true,
                oldprice: 200,
                price: 150,
                description: 'این کتاب در  مورد ذهنیت الهی بحث میکند'
            },
            {
                id: 4,
                title: 'ثروتمند ترین مرد بابل',
                percent: true,
                oldprice: 150,
                price: 80,
                description: 'این کتاب در  مورد ذهنیت الهی بحث میکند'
            },
            {
                id: 5,
                title: 'جادوی فکر یزرگ',
                percent: true,
                oldprice: 150,
                price: 120,
                description: 'این کتاب در  مورد ذهنیت الهی بحث میکند'
            },
            {
                id: 6,
                title: 'تغییرات کوچک',
                percent: true,
                oldprice: 250,
                price: 170,
                description: 'این کتاب در  مورد ذهنیت الهی بحث میکند'
            },
            {
                id: 7,
                title: 'افکار یا فکر یزرگ',
                percent: true,
                oldprice: 450,
                price: 300,
                description: 'این کتاب در  مورد ذهنیت الهی بحث میکند'
            },
        ],
    });
    const ShowProduct = () => {
        setState({});
    }

    const Products = state.products.map((item) => {
        return <ProductItem
            key={item.id}
            title={item.title}
            price={item.price}
            oldprice={item.oldprice}
            description={item.description}
            percent={item.percent}
            buy={() => ShowProduct(item.id)}
            save={() => ShowProduct(item.id)}
        />
    });
    return (
        <div className='container rounded-2 p-3 d-flex flex-row justify-content-around align-items-center flex-wrap shadow'>
            {Products}
        </div>
    );
}
export default Percents