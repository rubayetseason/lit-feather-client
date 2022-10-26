import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import Header from '../pages/shared/Header';
import LeftNav from '../pages/shared/LeftNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'><LeftNav></LeftNav></Col>
                    <Col lg="10"><Outlet></Outlet></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;