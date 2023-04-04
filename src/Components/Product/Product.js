import './Product.css'

const Product = ({title}) => {
    const ShowInfo = () => {
        alert("Product is : "+ title);
        console.log("Product is : ", title);
    }
    return (
        <div className='product-container'>
            <div>{title}</div>
            <button className='btn' onClick={ShowInfo}>Click</button>
        </div>
    )
}

export default Product