import Lottie from 'lottie-react'
import React from 'react';
import { Link } from 'react-router-dom';

import cycle from "./Cycling.json"

const Hero = () => {


    return (
        <div className='lg:flex justify-between w-[80%] mx-auto'>
            <div className="hero-content text-center text-neutral">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl font-bold text-yellow-500">IT IS USED CYCLE HUB</h1>
                    <p className="mb-5">Deals Of The Day is a website where you can purchase or sell your used cycle. Hand to hand delivery and cash system. It is a reliable website for cycle enthusiast.</p>
                    <Link to="/all-products" className="btn bg-blue-900 hover:bg-yellow-500 rounded-none border-none">Buy Now</Link>
                </div>
            </div>
            <div className='lg:w-1/2'>
                <Lottie animationData={cycle} loop={true} />
            </div>
        </div>

    );
};

export default Hero;