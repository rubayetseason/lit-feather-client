import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';
import './Courses.css';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <Container>
                <h2 className='my-5 bg-danger text-white py-2 text-center'>All Courses</h2>
                <div className='course-container'>
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}></Course>)
                    }
                </div>

            </Container>
        </div>
    );
};

export default Courses;