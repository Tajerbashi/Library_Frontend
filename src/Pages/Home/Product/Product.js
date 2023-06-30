import { Col, Card } from 'react-bootstrap';
import './Product.css'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
    return (
        <Col sm={12} md={6} lg={3}>
            <Card className='cardContainer'>
                <Link to={`/Product/${product._id}`}>
                    <Card.Img variant="top" style={{ height: '12rem' }} src={product.image} />
                </Link>
                <Card.Body>
                    <Card.Title className='title-'>{product.name}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <div className='d-flex flex-row justify-content-between'>
                        <Link to={product.link} className='btn btn-' variant="primary">مشاهده</Link>
                        <span className='span-'>{product.price} هزار تومان</span>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Product;