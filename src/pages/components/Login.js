import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Container>
        <h2 className='mt-5 bg-danger text-white py-2 text-center'>Login Now</h2>
        <Form className='mt-4'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"  required />
        </Form.Group>
        <p><small>Don't have an account? <Link to='/register'>Register now</Link> </small></p>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      </Container>
      
    </div>
  );
};

export default Login;