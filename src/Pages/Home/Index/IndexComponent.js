import Wrapper from '../../../Components/HOC/wrapper';
import './IndexComponent.css'
import { Container } from 'react-bootstrap'
import HeaderComponent from '../../../Components/Header/HeaderComponent'
import FooterComponent from '../../../Components/Footer/FooterComponent'
import Products from '../Products/Products'
import ProductsList from '../../../Array/Products'

const IndexComponent = () => {
    return (
        <Wrapper>
            <div className='d-flex flex-column justify-content-between align-item-center'>
                <Container>
                    <Products data={ProductsList} />
                </Container>
                <FooterComponent />
            </div>
        </Wrapper>
    );
}

export default IndexComponent;