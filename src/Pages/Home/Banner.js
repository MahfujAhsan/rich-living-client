import React from 'react';
import hero from "../../assets/Image/project3.png"

const Banner = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-base-200 gap-5">
            <div className="flex flex-col justify-center items-center lg:flex-row-reverse p-5">
                <img src={hero} className="flex-shrink-1 lg:max-w-lg rounded-lg shadow-2xl" alt='' />
                <div className='lg:w-2/4'>
                    <h1 className="text-2xl mt-4 lg:mt-0 lg:text-5xl font-bold">We Build Your <br /> Dream</h1>
                    <p className="my-3 lg:my-6">Online Easte Agency, the mordern way to sell your own home, You can use Griffin Residential to market your property</p>
                    <button className="btn btn-primary font-bold text-white">Booking</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;