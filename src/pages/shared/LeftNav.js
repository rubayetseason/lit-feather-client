import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [catagories, setCatagories] = useState([]);
    useEffect(() => {
        fetch('https://litfeather-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, []);
    return (
        <div className='mt-5'>
            <h4 className='mb-3 bg-danger text-white text-center py-1'>Catagories</h4>
            {
                catagories.map(catagory =>
                    <p key={catagory.id}>
                        <Link to={`/course/${catagory.id}`}>{catagory.name}</Link></p>)
            }

        </div>
    );
};

export default LeftNav;