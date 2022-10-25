import React, { useEffect } from 'react';
import { useState } from 'react';

const LeftNav = () => {
    const [catagories, setCatagories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, []);
    return (
        <div className='mt-5'>
            <h4 className='mb-3 bg-danger text-white text-center py-1'>Catagories</h4>
            {
                catagories.map(catagory => <p key={catagory.id}>
                    {catagory.name}
                </p>)
            }
        </div>
    );
};

export default LeftNav;