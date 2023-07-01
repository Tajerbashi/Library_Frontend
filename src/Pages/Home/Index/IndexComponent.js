import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { productListAction } from '../../../Redux/Action/ProductAction'
import { Container } from 'react-bootstrap'
import Wrapper from '../../../Components/HOC/wrapper';
import FooterComponent from '../../../Components/Footer/FooterComponent'
import Products from '../Products/Products'
import './IndexComponent.css'
// import ProductsList from '../../../Array/Products'
const IndexComponent = () => {

    //برای استفاده از دیسپچ ها یا همان اکشن های که تعریف کردیم
    const dispatch = useDispatch();
    //  واکشی داده های داخل استور
    const productList = useSelector((state) => state.productList);
    // دریافت اطلاعات از ریدیوسر
    const { loading, products } = productList

    useEffect(() => {
        //  دریافت عملکرد ها از ریدیوسر
        dispatch(productListAction());
    }, [dispatch]);
    return (
        <Wrapper>
            {
                loading ? <h2>درحال بارگذاری</h2> : <div className='d-flex flex-column justify-content-between align-item-center'>
                    <Container>
                        <Products data={products} />
                    </Container>
                    <FooterComponent />
                </div>
            }
        </Wrapper>
    );
}

export default IndexComponent;