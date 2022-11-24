import React from 'react';
import Advertise from '../Advertise/Advertise';
import Categories from '../../Categories/Categories';
import Hero from '../Hero/Hero';
import HomeBottomBanner from '../HomeBottomBanner/HomeBottomBanner';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <Hero></Hero>
            <Advertise></Advertise>
            <Categories></Categories>
            <Reviews></Reviews>
            <HomeBottomBanner></HomeBottomBanner>
        </div>
    );
};

export default Home;