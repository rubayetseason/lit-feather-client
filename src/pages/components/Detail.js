import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Detail.css';
import { AiFillStar } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";

const Detail = () => {
    const course = useLoaderData();
    const { name, image_url, author, rating, details } = course;
    console.log(course);
    return (
        <div>
            <div className='bd-danger'>
                <h2 className='mt-5 bg-danger text-white py-2 text-center'>{name} &nbsp; &nbsp;  <BsDownload /></h2>
            </div>
            <img className='detail-img' src={image_url} />
            <div>
                <p className='text-center'>By: {author}</p>
                <p className='text-center'><AiFillStar /> {rating}</p>
            </div>
            <div className='my-4'>
                <small>{details}</small>
            </div>
        </div>
    );
};

export default Detail;