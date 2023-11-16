import "./Navbar.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-primary rounded-5 p-3">
      <Container>
        <Navbar.Brand href="#home" className="text-light">
          کتابخانه
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto text-light">
            <Nav.Link href="#features" className="text-light">
              خانه
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-light">
              محصولات
            </Nav.Link>
            <NavDropdown
              className="text-light"
              title="سازنده گان"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                نویسنده گان
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">مترجمان</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">کتاب</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">مقالات</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className="text-light">
              گفتگو
            </Nav.Link>
            <Nav.Link className="text-light" eventKey={2} href="#memes">
              پنل کاربری
            </Nav.Link>
            <Nav.Link className="text-light" eventKey={2} href="#memes">
              سبد خرید
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="جستجو ..."
              className="me-1"
              aria-label="Search"
            />
            <Button variant="outline-light">جستجو</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
