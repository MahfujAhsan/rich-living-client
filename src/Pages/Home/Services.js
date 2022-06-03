import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/services')
            .then(function (response) {
                setServices(response.data);
            })
    }, [])
    return (
        <div className='px-12 my-12'>
            <p className='text-center mb-4'>Services</p>
            <h2 className='text-3xl text-center mb-12 font-bold'>We're an agency tailored to all <br /> clients' needs that always delivers</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service key={service._id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;