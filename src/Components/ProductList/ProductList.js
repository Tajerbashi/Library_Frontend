import './ProductList.css'
const Products = [
    { id:1,title:'Book', name:'Selection' },
    { id:2,title:'Watch', name:'Rolex' },
    { id:3,title:'Glass', name:'Robin' },
    { id:4,title:'Phone', name:'14 Pro Max' },
];
const ProductList = () => {

    return (
        <ul className='list-group'>
            {Products.map((item) => {
                return <li key={item.id} className='list-group-item'><a href='./#'>{item.title} : {item.name}</a></li>
            })}
        </ul>
    );
}

export default ProductList;