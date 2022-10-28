import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const {enroll} = useContext(AuthContext);
    return (

        <div>
            <h1 className='text-3xl text-center bg-amber-300 m-6'>{enroll}</h1>
        </div>
    );
};

export default CheckOut;