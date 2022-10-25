import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Detail.css';

const Detail = () => {
    const course = useLoaderData();
    const {name, image_url, author, rating, details} = course;
    console.log(course);
    return (
        <div>
            <h2 className='mt-5 bg-danger text-white py-2 text-center'>{name}</h2>
            <img className='detail-img' src={image_url} />
        </div>
    );
};

export default Detail;