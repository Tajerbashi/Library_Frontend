import Product from "../Product/Product"

import './ProductList.css'

const ProductList = ({products,DeleteProduct,UpdateProduct}) => {
    return (
        <div className="product-list">
            {
                products.map((item) =>{
                    return <Product key={item.id} product={item} DeleteProduct={DeleteProduct} UpdateProduct={UpdateProduct}/>
                })
            }
        </div>
    )

}

export default ProductList