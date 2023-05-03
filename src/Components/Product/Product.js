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
            <span className='product'>
                Price : <span className='pro-in'><input placeholder='Enter Price ...' type='text' className='product-inputer' onChange={props.change}></input></span>
            </span>
            <span>
                <button onClick={props.ChangeStatus} className='btn btn-dark'>Click</button>
            </span>
        </div>
    );
}

export default Product;