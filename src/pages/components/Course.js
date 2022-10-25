import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaPenNib } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";

const Course = ({ course }) => {
  const { name, author, image_url, details } = course;
  return (
    <Card className="p-1 shadow border border-secondary">
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p><small><FaPenNib /> {author}</small></p>
        </Card.Text>
        <Card.Text>
          {details.slice(0, 120)}.....
        </Card.Text>
        <Button variant="primary">Detail</Button>
      </Card.Body>
    </Card>
  );
};

export default Course;