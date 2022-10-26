import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaPenNib } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
  const { name, author, image_url, details } = course;
  return (
    <Card className="p-1 shadow border border-secondary">
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{name} </Card.Title>
        <Card.Text>
          <p><small><FaPenNib /> {author}</small></p>
        </Card.Text>
        <Card.Text>
          {details.slice(0, 120)}.....
        </Card.Text>
        <Link to={`/course/${course.id}`}><Button variant="primary">Detail</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default Course;