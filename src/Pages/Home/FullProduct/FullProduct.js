import './FullProduct.css'
import { Row, Card, Col } from 'react-bootstrap'
import ProductsList from '../../../Array/Products'
import { Link, useParams } from "react-router-dom";
import HeaderComponent from '../../../Components/Header/HeaderComponent';
const FullProduct = ({ match }) => {
    const routeParams = useParams();
    const product = ProductsList.find(item => {
        return item._id === routeParams.id
    });
    return (
        <div>
            <HeaderComponent />
            <div className='fullProduct-Container'>
                <Row className='fullProduct-Controller'>
                    <Link to={'/'} className='fullProduct-Back btn btn-dark bg-gradient'>
                        بازگشت به صفحه اصلی
                        <i className='fa fa-home '></i>
                    </Link>
                    <Link to={'/'} className='fullProduct-Back btn btn-primary bg-gradient'>
                        افزودن به سبد خرید
                        <i className='fa fa-shopping-cart'></i>
                    </Link>
                    <Link to={'/'} className='fullProduct-Back btn btn-success bg-gradient'>
                        <span>پرداخت</span>
                        <i className='fa fa-credit-card-alt'></i>
                    </Link>
                </Row>
                <Row className="g-4 fullProduct-Row" >
                    <Col className='fullProduct-Col'>
                        <Card className='fullProduct-Card'>
                            <Card.Img className='fullProduct-Image w-50' variant="top" src={product.image} />
                            <Card.Body className='fullProduct-Body'>
                                <Card.Title className='fullProduct-title'>{product.name}</Card.Title>
                                <Card.Text className='fullProduct-description'>{product.description}</Card.Text>
                                <Card.Subtitle className='fullProduct-price'>قیمت محصول : {product.price} هزار تومان</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row >
            </div>
        </div>

    )
}

export default FullProduct
