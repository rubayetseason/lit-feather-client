import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <Container>
                <h2 className='mt-5 bg-danger text-white py-2  text-center'>Register Now</h2>
                <Form className='mt-4'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Picture URL</Form.Label>
                        <Form.Control type="text" placeholder="Picture link" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <p className='text-center'><small>Already have an account? <Link to='/login'>Login now</Link> </small></p>
                    <div className='text-center mb-5'>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </div>
                </Form>
            </Container>

        </div>
    );
};

export default Register;