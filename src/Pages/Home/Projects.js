import axios from 'axios';
import React, { useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);axios.get('http://localhost:8000/projects')
        .then(function (response) {
            setProjects(response.data)
        });
        
    return (
        <div className='px-12 my-12'>
            <p className='text-center mb-4'>Projects</p>
            <h2 className='text-3xl text-center mb-12 font-bold'>Discover the latest Interior Design <br /> available today</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    projects.map(project => <Project key={project._id} project={project} />)
                }
            </div>
        </div>
    );
};

export default Projects;