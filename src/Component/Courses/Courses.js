import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CardLink from '../CardLink/CardLink';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [subjects,setSubjects]=useState([]);
    useEffect(()=>{
        fetch('https://study-zone-server-alimasud05.vercel.app/subjects')
        .then(res=>res.json())
        .then(data=>setSubjects(data))

    },[])
   // console.log(subjects);
    return (
        <div className='grid md:grid-cols-1  lg:grid-cols-5 w-full mx-auto my-3'>
            <div className='course-card lg:col-span-4 justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 g w-full  mx-auto '>
                {
                    subjects.map(sub=><Course
                    key={sub.id}
                    sub={sub}
                    ></Course>)

                } 
                
            </div>
            
            <div  className=' lg:col-span-1 w-full  card-link'>
               <CardLink></CardLink>
            </div>
        </div>
    );
};

export default Courses;