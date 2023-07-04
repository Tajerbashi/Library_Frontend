import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

import './navComponent.css'

const NavComponent = () => {
    return (
        <Navbar expand="lg" variant='dark' className="bg-nav">
            <Container fluid>
                <LinkContainer to={'/'}>
                    <Navbar.Brand className='nav-brand-s'>کتابخانه</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-flex flex-lg-row justify-content-between w-100">
                        <div className='d-flex flex-column flex-lg-row'>
                            <LinkContainer to={'/admin-panel'}>
                                <Nav.Link className='linkNav'>پنل ادمین</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/'}>
                                <Nav.Link className='linkNav'>خانه</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/'}>
                                <Nav.Link className='linkNav'>محصولات</Nav.Link>
                            </LinkContainer>
                        </div>
                        <div className='d-flex flex-column flex-lg-row'>
                            <LinkContainer to={'/cart'}>
                                <Nav.Link className='linkNav'>
                                    <i className='fa fa-shopping-cart'></i>
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/'}>
                                <Nav.Link className='linkNav'>
                                    <i className='fa fa-user'></i>
                                </Nav.Link>
                            </LinkContainer>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavComponent;