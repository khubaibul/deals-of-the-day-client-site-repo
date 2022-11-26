import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Blocks } from 'react-loader-spinner';
import SingleAdvertise from './SingleAdvertise';
import axios from 'axios';

const Advertise = () => {
    const [advertisementProducts, setAdvertisementProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/advertisement-products`)
            .then((data) => {
                setAdvertisementProducts(data.data)
                setLoading(false);
            })
            .catch((error) => console.log(error))
    }, [])


    if (loading) {
        return <div className='flex justify-center mt-10'>
            <Blocks
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
            />
        </div>
    }





    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000

    };

    if (advertisementProducts.length) {
        return <div className='my-48'>
            <h1 className="mb-5 text-3xl font-bold text-neutral text-center">ADVERTISED PRODUCT</h1>
            <Slider {...settings}>
                {advertisementProducts?.map((product) => <SingleAdvertise
                    key={product._id}
                    product={product}
                >
                </SingleAdvertise>)}
            </Slider>
        </div>
    }
}

export default Advertise;