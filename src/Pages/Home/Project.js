import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Project = ({project}) => {
    const {name, location, image} = project;
    return (
        <div role='button' className='text-center'>
            <h2 className='mb-3'><span className='text-xl font-bold'>{name}</span></h2>
            <img className='rounded-lg' src={image} alt="" />
            <p className='my-4'> <FontAwesomeIcon icon={faLocationDot} size="lg"/> Location: <span className='text-xl text-green-600 font-bold'>{location}</span></p>
        </div>
    );
};

export default Project;