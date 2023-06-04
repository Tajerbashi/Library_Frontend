import './ProductItem.css'
const ProductItem = (props) => {
    return (
        <div className='col-lg-3 col-md-4 col-sm-6 p-1'>
            <div className='product-container'>
                <div>
                    {props.percent ? <div className='pro-per'>تخفیف</div> : null}
                    <h6 className='product-container-title'>{props.title}</h6>
                </div>
                <div className='product-container-img'>
                    این یک تصویر است
                    {props.percent ? <span className='p-price p-percent'>قیمت : {props.oldprice}</span> : null}
                    <span className='p-price'>قیمت : {props.price}</span>
                </div>
                <div className='product-container-description'>{props.description}</div>
                <div className='product-container-btn'>
                    <button onClick={props.buy} className='pByu'>خرید</button>
                    <button onClick={props.save} className='pSave'>ذخیره</button>
                </div>
            </div>
        </div>
    );
}
export default ProductItem;