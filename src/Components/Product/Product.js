import './Product.css'
const Product = (props) => {
    return (
        <div className="Product"><span className='priceSpan'>Book : {props.name}</span> <span className='priceSpan'>Price : {props.price}$</span></div>
    );
}

export default Product;