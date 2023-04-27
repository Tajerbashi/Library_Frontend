import './Product.css'
const Product = (props) => {
    return (
        <div className="Product">
            <span className='product'>
                Product : <span className='pro-item'>{props.name}</span>
            </span>
            <span className='product'>
                Price : <span className='pro-item'>{props.price}$</span>
            </span>
        </div>
    );
}

export default Product;