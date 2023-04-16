import './Product.css'
const Product = (props) => {
    return (
        <div className="Product"><span className='priceSpan'>Product : <span className='pro-item'>{props.name}</span></span> <span className='priceSpan'>Price : <span className='pro-item'>{props.price}$</span></span></div>
    );
}

export default Product;