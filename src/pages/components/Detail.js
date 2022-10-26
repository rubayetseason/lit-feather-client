import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
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
                <h3 className='mt-5 bg-danger text-white py-2 text-center'>{name} &nbsp; &nbsp; <button className='bg-danger border-0'><BsDownload /></button> </h3>
            </div>
            <img className='detail-img' src={image_url} />
            <div>
                <p className='text-center'>By: {author}</p>
                <p className='text-center'><AiFillStar /> {rating}</p>
            </div>
            <div className='my-2'>
                <small>{details}</small>
            </div>
            <div className='text-center'>
            <Link to='checkout'><button className='btn btn-outline-danger my-4 text-center'>Get Premium Access</button></Link>
            </div>
        </div>
    );
};

export default Detail;