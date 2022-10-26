import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
  const { GoogleLogin, GithubLogin, UserLogIn } = useContext(AuthContext);
  const GoogleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    GoogleLogin(GoogleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      })
  };

  const handleGithubLogin = () => {
    GithubLogin(GithubProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      })
  };

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    UserLogIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      form.reset();
  })
  .catch(e => {
      console.error(e);
  });
};


  return (
    <div>
      <Container>
        <h2 className='mt-5 bg-danger text-white py-2 text-center'>Login Now</h2>
        <Form className='mt-4'  onSubmit={handleForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" required />
          </Form.Group>
          <p className='text-center'><small>Don't have an account? <Link to='/register'>Register now</Link> </small></p>
          <div className='text-center'>
            <Button variant="primary" type="submit" >
              Login
            </Button>
          </div>

        </Form>
        <div className='text-center'>
          <button className='rounded-0 btn btn-outline-dark my-2' onClick={handleGoogleSignIn}><FcGoogle /> Login with Google</button> <br />
          <button onClick={handleGithubLogin} className='rounded-0 btn btn-outline-dark'><FiGithub /> Login with Github</button>
        </div>

      </Container>

    </div>
  );
};

export default Login;