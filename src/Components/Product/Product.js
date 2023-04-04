import './Product.css'

const Product = ({title}) => {
    const ShowInfo = () => {
        alert("Product is : "+ document.getElementById("inputer").value);
        console.log("Product is : ", title);
    }
    return (
        <div className='product-container'>
            <div>{title}</div>
            <input type='text' className='inputer' id='inputer' />
            <button className='btn' onClick={ShowInfo}>Click</button>
        </div>
    )
}

export default Product