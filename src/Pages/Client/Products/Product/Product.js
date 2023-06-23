import './Product.css'
const Product = (props) => {
    return (
        <div className='Product-Container'>
            <div className='Product-Image'>{props.img}</div>
            <h6 className='Product-Info-Container'>
                <span className='Product-Title'>{props.title}</span>
                <span className='Product-Price'>{props.price}</span>
            </h6>
            <div className='Product-Description'>{props.description}</div>
            <button onClick={props.click} className='Product-btn'>دیدن</button>
        </div>
    );
}
export default Product