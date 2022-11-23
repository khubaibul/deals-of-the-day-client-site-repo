import React from 'react';
import heroBg from "../../../../Assets/Images/Hero_bg.jpg";

const Hero = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl font-bold text-yellow-500">IT IS USED CYCLE HUB</h1>
                    <p className="mb-5">Deals Of The Day is a website where you can purchase or sell your used cycle. Hand to hand delivery and cash system. It is a reliable website for cycle enthusiast.</p>
                    <button className="btn bg-blue-900 hover:bg-yellow-500 rounded-none border-none">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;