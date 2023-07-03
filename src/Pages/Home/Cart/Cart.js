import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../../Redux/Action/CartAction'
import { Row, Col, ListGroup, Image, Button, Card } from 'react-bootstrap'
import './Cart.css';
const Cart = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const productId = params.id;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const removeFromCartHandler = (id) => {
    console.log("ID : ", id);
    dispatch(removeFromCart(id));
  }

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId));
    }
  }, [dispatch, productId]);

  const List = cartItems.map((item) => {
    return (
      <ListGroup.Item key={item.product}>
        <Row>
          <Col md={2}>
            <Image src={item.image} alt={item.name} fluid rounded />
          </Col>
          <Col md={3}>
            {item.name}
          </Col>
          <Col md={2}>
            {item.price}
          </Col>
          <Col md={2}>
            <Button
              type='button'
              variant='light'
              onClick={() => removeFromCartHandler(item.product)}
            >
              <i className='fa fa-trash'></i>
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  })
  return (
    <Row className='CartContainer'>
      <Col md={8}>
        <h2>سبد خرید</h2>
        {
          cartItems.length === 0
            ? (<p>سبد خرید خالی است</p>)
            : (<ListGroup variant='flush'>
              {
                List
              }
            </ListGroup>
            )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              {cartItems.reduce((acc, curItem) => acc + curItem.price, 0)}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default Cart
