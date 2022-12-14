import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    };


    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(result => {
                const user = result.user;
            })
            .catch(error => {
                console.log(error);
            })
    };


    return (
        <div>
            <Container>
                <h2 className='mt-5 bg-danger text-white py-2  text-center'>Register Now</h2>
                <Form className='mt-4' onSubmit={handleForm}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Picture URL</Form.Label>
                        <Form.Control type="text" name="photoURL" placeholder="Picture link" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <p className='text-center'><small className='text-center text-danger'>{error}</small></p>
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