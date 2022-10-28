import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const CardArea = () => {
    const {enroll} = useContext(AuthContext);
    return (

        <div>
            <h1>{enroll}</h1>
        </div>
    );
};

export default CardArea;