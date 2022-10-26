import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2 className='my-5 bg-danger text-white py-2 text-center'>404 Not Found</h2>
            <Link to='/'><div className='text-center'><button className='btn btn-danger'>Return to Home</button></div></Link>

        </div>
    );
};

export default NotFound;