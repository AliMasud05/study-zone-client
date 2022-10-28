import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import './Course.css'

const Course = ({sub}) => {
    const{enroll,setEnroll}=useContext(AuthContext);
    console.log(sub);
    const { picture, sub_title, balance }=sub;
    
    return (
        <div className='card-container'>
            <div className="card w-96 glass">
                <figure><img src={picture} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{sub_title}</h2>
                    <p>{balance}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => setEnroll([...enroll,sub_title])}  className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;