import React from 'react';
import { Outlet } from 'react-router-dom';
import Carousel from '../Component/Carousel/Carousel';
import Footer from '../Component/Footer/Footer';
import Header from '../Component/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Carousel></Carousel>
            <Footer></Footer>
        </div>
    );
};

export default Main;