import React from 'react';
import heroBanner from "../../../../Assets/Images/banner.png";

const Hero = () => {


    return (
        <div>
            <img src={heroBanner} className="lg:h-full md:h-full h-32" alt="" />
        </div>

    );
};

export default Hero;