import React from 'react';
import banner from "../../../../Assets/Images/velogonki.jpg"

const HomeBottomBanner = () => {
    return (
        <div className='mb-40'>
            <div className="max-w-md mx-auto text-center">
                <h1 className="mb-5 text-2xl font-bold text-yellow-500">WHY YOU SHOULD BUY/SELL US?</h1>
                <p className="mb-5">Deals Of The Day is a website where you can purchase or sell your used cycle. Hand to hand delivery and cash system. It is a reliable website for cycle enthusiast.</p>
            </div>
            <img src={banner} alt="" />
        </div>
    );
};

export default HomeBottomBanner;