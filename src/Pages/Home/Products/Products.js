import './Products.css'
import Product from '../Product/Product'
import { Row } from 'react-bootstrap';
const Products = (props) => {
    const ProductList = props.data.map((item, key) => {
        return <Product
            key={key}
            product={item}
        />
    });

    return (
        <Row className="productsContainer">
            {ProductList}
        </Row>
    )
}

export default Products
