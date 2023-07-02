import './FullProduct.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Row, Card, Col, Button } from 'react-bootstrap'
import { Link, useParams, useNavigate  } from "react-router-dom";
import { productDetailAction } from '../../../Redux/Action/ProductAction'
import HeaderComponent from '../../../Components/Header/HeaderComponent';
const FullProduct = () => {
    const id = useParams();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.productDetail);
    const { loading, product } = data;
    const history = useNavigate();

    useEffect(() => {
        dispatch(productDetailAction(id.id));
    }, [dispatch, id.id]);

    const addToCartHandler = () => {
        history(`/cart/${id.id}`);
    }
    return (
        <div>
            <HeaderComponent />
            {
                loading ?
                    <h2 className='loadingH2'>در حال بارگذاری محصول ...</h2>
                    :
                    <div className='fullProduct-Container'>
                        <Row className='fullProduct-Controller'>
                            <Link to={'/'} className='fullProduct-Back btn btn-dark bg-gradient'>
                                بازگشت به صفحه اصلی
                                <i className='fa fa-home '></i>
                            </Link>
                            <Button
                                onClick={addToCartHandler}
                                className='fullProduct-Back btn btn-primary bg-gradient'>
                                افزودن به سبد خرید
                                <i className='fa fa-shopping-cart'></i>
                            </Button>
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
            }
        </div>

    )
}

export default FullProduct
