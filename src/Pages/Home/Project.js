import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({project}) => {
    const {_id, name, location, image} = project;
    const navigate = useNavigate();
    const handleProject = () => {
        navigate(`project/${_id}`)
    }
    return (
        <div role='button' onClick={handleProject} className='text-center hover:scale-[1.1] ease-in-out duration-500'>
            <h2 className='mb-3'><span className='text-xl font-bold'>{name}</span></h2>
            <img className='rounded-lg' src={image} alt="" />
            <p className='my-4'> <FontAwesomeIcon icon={faLocationDot} size="lg"/> Location: <span className='text-xl text-green-600 font-bold'>{location}</span></p>
        </div>
    );
};

export default Project;