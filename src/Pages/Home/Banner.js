import React from 'react';
import hero from "../../assets/Image/bernard-hermant-6ftZuO_-b64-unsplash 1.png"

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={hero} width={400} class="lg:max-w-lg rounded-lg shadow-2xl" alt='' />
                <div className='lg:w-2/4'>
                    <h1 class="text-5xl font-bold">We Build Your <br/> Dream</h1>
                    <p class="py-6">Online Easte Agency, the mordern way to sell your own home, You can use Griffin Residential to market your property</p>
                    <button class="btn btn-primary">Booking</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;