import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'react-day-picker/dist/style.css';

const SingleService = () => {
    const [service, setService] = useState({});
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8000/service/${id}`)
            .then(function (response) {
                setService(response.data);
            })
    }, [id]);
    
    return (
        <div className='px-12 my-12'>
            <h2>{service.name}</h2>
        </div>
    );
};

export default SingleService;