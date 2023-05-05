import './Product.css'
const Product = (props) => {
    return (
        <div className='product-container'>
            <h6 className='product-title'>{props.title}</h6>
            <p className='product-price'>{props.price} تومان</p>
            <button className='product-button'>دیدن</button>
            <div className='product-configs-con'>
                <div className='product-config-item'>
                    <input  className='product-inputer-1' placeholder='عنوان جدید وارد کنید ...' onChange={props.ChangeTitle} />
                    <button className='btn-t' onClick={props.SaveTitle}>+</button>
                </div>
                <div className='product-config-item'>
                    <input className='product-inputer-2' placeholder='قیمت جدید وارد کنید ...' onChange={props.ChangePrice} />
                    <button className='btn-p' onClick={props.SavePrice}>+</button>
                </div>
            </div>
        </div>
    );
}
export default Product;