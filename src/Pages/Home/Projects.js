import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([])
    const {isLoading} = useQuery('projects', () => axios.get('http://localhost:8000/projects')
    .then(function (response) {
        setProjects(response.data)
    }))
    if(isLoading) {
        return <Spinner/>
    };
    return (
        <div className='px-12 my-24'>
            
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    projects.map(project => <Project key={project._id} project={project}/>)
                }
            </div>
        </div>
    );
};

export default Projects;