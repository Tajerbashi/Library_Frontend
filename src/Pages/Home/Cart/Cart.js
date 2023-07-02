import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../Redux/Action/CartAction'
import { Row, Col, ListGroup, Image, Button } from 'react-bootstrap'
import './Cart.css';
const Cart = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const productId = params.id;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId));
    }
  }, [dispatch, productId]);
  return (
    <div className='CartContainer'>
      <Row>
        <Col md={8}>
          <h2>سبد خرید</h2>
          {
            cartItems.length === 0
              ? <p>سبد خرید خالی است</p>
              : <ListGroup variant='flush'></ListGroup>
          }
        </Col>
        <Col md={4}>

        </Col>
      </Row>
    </div>
  )
}

export default Cart
