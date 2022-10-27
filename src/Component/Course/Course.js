import React from 'react';
import './Course.css'

const Course = ({sub}) => {
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
                        <button  className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;