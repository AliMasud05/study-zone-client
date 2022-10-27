import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardLink from '../CardLink/CardLink';
import './CardDetails.css'


const CardDetails = () => {
    const detailsData = useLoaderData();
    const { teacher, sub_title, registered, picture, balance, address, about } = detailsData;
    return (
        <div>
            <div className='card-detail w-10/12 mx-auto font-serif text-black '>
                <div  >
                    <div className='border rounded-lg w-4/5  bg-[#BAD1C2]   '>
                        <img className='mx-auto max-h-72 w-1/2' src={picture} alt="" />
                        <div className='text-2xl bg-[#4E6C50] text-white text-center '>
                            <h2>{sub_title}</h2>
                            <h3>{teacher}</h3>

                        </div>
                        <p className='p-3'>{about} </p>
                        <div className='lg:flex justify-around text-2xl bg-cyan-300 text-black'>
                            <h3 className=''>{balance}</h3>
                            <p>{registered}</p>
                            <p>{address}</p>
                        </div>
                    </div>
                </div>


                <div>
                    <CardLink></CardLink>
                </div>



            </div>
            
        </div>
    );
};

export default CardDetails;