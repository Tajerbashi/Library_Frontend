import './Product.css'

const Product = ({ product,DeleteProduct ,UpdateProduct}) => {


    return (
        <div className='product'>
            <div>{ product.title }</div>
            <div>
                <button className='btn' onClick={() => DeleteProduct(product.id)}>
                    Delete
                </button>
                <button className='btn' onClick={() => UpdateProduct(product.id)}>
                    Update
                </button>
            </div>
        </div>
    )
}

export default Product