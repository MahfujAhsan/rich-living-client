import { faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {_id, name, price, image, description} = service;
    const navigate = useNavigate();
    const handleProject = () => {
        navigate(`/booking/${_id}`)
    };
    return (
        <div role='button' onClick={handleProject} className='text-center hover:scale-[1.1] ease-in-out duration-500'>
            <img className='rounded-lg w-2/4 mx-auto' src={image} alt="" />
            <h2 className='mb-3'><span className='text-xl font-bold'>{name}</span></h2>
            <p className='my-4'> <FontAwesomeIcon icon={faCircleDollarToSlot} size="lg"/> Price: <span className='text-xl text-green-600 font-bold'>$ {price}</span></p>
            <p>{description}</p>
        </div>
    );
};

export default Service;