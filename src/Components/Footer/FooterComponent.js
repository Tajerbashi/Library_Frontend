// rafce
import { Container, Row, Col } from 'react-bootstrap'

import './FooterComponent.css'
const FooterComponent = () => {
    return (
        <Container fluid className='footerContainer'>
            <Row>
                <Col className='text-center'>Footer</Col>
            </Row>
        </Container>
    )
}

export default FooterComponent
