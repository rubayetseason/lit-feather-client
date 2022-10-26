import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { GoStar } from "react-icons/go";

const Checkout = () => {
    const data = useLoaderData();
    console.log(data);
    const { name, image_url, rating, details, author } = data;
    return (
        <div>
            <h2 className='mt-5 bg-danger text-white py-2 text-center'>Welcome to checkout</h2>
            <Container>
                <Card style={{ width: '80%', margin: '10px auto'}}>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Author: {author}
                        </Card.Text>
                        <Card.Text>
                            Ratings: {rating} <GoStar /> &nbsp; &nbsp; Price: 30 $
                        </Card.Text>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        <Button variant="primary">Buy This Course</Button>
                    </Card.Body>
                </Card>
            </Container>

        </div>
    );
};

export default Checkout;