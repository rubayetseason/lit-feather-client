import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Course = ({ course }) => {
    const { name, author, rating, image_url, details } = course;
    console.log(course);
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {details.slice(0,200)}.....
        </Card.Text>
        <Button variant="primary">Detail</Button>
      </Card.Body>
    </Card>
    );
};

export default Course;