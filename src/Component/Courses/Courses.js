import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CardLink from '../CardLink/CardLink';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [subjects,setSubjects]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/subjects')
        .then(res=>res.json())
        .then(data=>setSubjects(data))

    },[])
   // console.log(subjects);
    return (
        <div className='courses-holder w-11/12 mx-auto'>
            <div className='course-card'>
                {
                    subjects.map(sub=><Course
                    key={sub.id}
                    sub={sub}
                    ></Course>)

                } 
                
            </div>
            
            <div className='fixed right-60 card-link'>
               <CardLink></CardLink>
            </div>
        </div>
    );
};

export default Courses;