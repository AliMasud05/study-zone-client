import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CardLink = () => {
    const [items,setItems]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/subject')
        .then(res=>res.json())
        .then(data=>setItems(data));
    },[])
    return (
        <div className='bg-slate-600 py-12 px-5 rounded-lg '>
            {
                items.map(item=><Link className='block m-3 bg-green-500 text-white py-2 px-4 text-center rounded-lg'
                key={item.id} to={`/subject/${item.id}`}>
                  {item.sub_name}
                
                </Link>)

            }
        </div>
    );
};

export default CardLink;