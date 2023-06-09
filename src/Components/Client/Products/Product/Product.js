import './Product.css'
const Product = (props) => {
    return(
        <div className='DefaultContainer Product-Container'>
            <h6 className='Product-Title'>{props.title}</h6>
            <div className='Product-Image'>{props.img}</div>
            <div className='Product-Description'>{props.description}</div>
            <div className='Product-Controls'>
                <span className='Product-Price'>{props.price}</span>
                <span><button onClick={props.click} className='Product-btn'>دیدن</button></span>
            </div>
        </div>
    );
}
export default Product