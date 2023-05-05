import './Product.css'
const Product = () => {
    return (
        <div className='product-container'>
            <h6 className='product-title'>عنوان محصول</h6>
            <p className='product-price'>250,000 تومان</p>
            <button className='product-button'>دیدن</button>
        </div>
    );
}
export default Product;