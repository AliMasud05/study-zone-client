import React from 'react';
import img1 from '../../utility/646292-updated-budget-2022-education-samagra-shiksha-1500.jpg'
import img2 from '../../utility/AZ_WASH_Jacobabad_010.jpg'
import img3 from '../../utility/download.jpg'
import img4 from '../../utility/shutterstock_520698799small.jpg'


const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img className='h-[30rem] w-full' src={img1} />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img className='h-[30rem] w-full' src={img2} />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img className='h-[30rem] w-full' src={img3} />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img className='h-[30rem] w-full' src={img4} />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Carousel;