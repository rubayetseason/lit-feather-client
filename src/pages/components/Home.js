import React from 'react';
import Lottie from 'lottie-react'
import reader from '../../assets/reader.json';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaYoutube, FaInstagram, FaFacebookMessenger, FaArrowRight } from 'react-icons/fa';

const Home = () => {
    return (

        <Container className='mt-1 p-4'>
            <Row>
                <Col lg='6' className='mt-4'>
                    <Lottie animationData={reader} loop={true} /></Col>
                <Col lg='6'>
                    <h2 className='bg-danger text-white mt-4 py-1  text-center'>Welcome to Lit Feather</h2>
                    <h5 className='mt-4  text-center'> Everything you need for everything you read.</h5>
                    <div><p className='fw-light mt-4  text-center'>
                        Welcome to our site where you find can your desired literature topics and courses which are relied by millions of students.
                    </p>
                    </div>
                    <div className="mb-4  text-center">
                        <button className='btn btn-danger rounded-pill py-2 px-4 fw-semibold mt-4'>
                            Our Courses <FaArrowRight />
                        </button>
                        <h6 className="mt-4  text-center">Find us on</h6>
                        <div className='text-center'>
                            <FaFacebook className='me-2' /> <FaYoutube className='me-2' /> <FaInstagram className="me-2" /> <FaFacebookMessenger />
                        </div>

                    </div>
                    <hr />
                    <div className='text-center'>
                        <div className="d-flex justify-content-around mt-4">
                            <div>
                                <div>
                                    <h3 className="fw-bold">20k+</h3>
                                </div>
                                <div>Course Students</div>
                            </div>
                            <div>
                                <div>
                                    <h3 className="fw-bold">200+</h3>
                                </div>
                                <div>Course Instructors</div>
                            </div>
                            <div>
                                <div>
                                    <h3 className="fw-bold">1k+</h3>
                                </div>
                                <div>Ratings and Reviews</div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;