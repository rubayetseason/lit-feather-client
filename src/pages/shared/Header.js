import React from 'react';
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { Link } from 'react-router-dom';
import banner from '../../assets/pagebanner.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={banner} width="40" height="40" className="d-inline-block align-top" />
                </Navbar.Brand>
                <Navbar.Brand><Link to='/'>Lit-Feather</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                        <Nav.Link><Link to='/courses'>Courses</Link></Nav.Link>
                        <Nav.Link><Link to='/faq'>FAQs</Link></Nav.Link>
                        <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
                        <Nav.Link><Form>
                            <Form.Check type="switch" id="custom-switch" label="" />
                        </Form></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link><Link to='login'>
                            Login
                            </Link></Nav.Link>
                        <Nav.Link eventKey={2}>
                            <Link to='register'>
                            Register
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;