import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testingImg from '../../../../Assets/Images/Hero_bg.jpg';

const Advertise = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000

    };

    return (
        <div>
            <Slider {...settings}>
                {[...Array(6)].map((item, i) => (
                    <div className="lg:p-10 p-4">
                        <h1>Testing {i + 1}</h1>
                        <img src={testingImg} alt="" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Advertise;