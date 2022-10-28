import React from 'react';

import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import CardLink from '../CardLink/CardLink';
import './CardDetails.css';

import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";


const CardDetails = () => {
    const ref = React.createRef();
    const { user, handleCheckOut }=useContext(AuthContext)
    const detailsData = useLoaderData();
    const { teacher, sub_title, registered, picture, balance, address, about } = detailsData;
    const handlePremium=(item)=>{
      handleCheckOut(item);
    };
    
    return (
        <div>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button className='mx-auto block bg-violet-700 text-2xl my-2 py-2 px-4 rounded-lg text-black font-serif font-bold' onClick={toPdf}>Make Details to Pdf</button>}
            </Pdf>
            <div  className='card-detail w-10/12 mx-auto font-serif text-black '>
                <div  ref={ref} >
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
                        <button onClick={()=>handlePremium(sub_title)} className='mx-auto block bg-[#FD841F] rounded-lg shadow-lg py-2 px-4 my-2 text-2xl '><Link to='/checkout'>Go Premium Access </Link> </button>
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