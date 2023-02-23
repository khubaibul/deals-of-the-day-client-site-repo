import React from 'react';
import Advertise from '../Advertise/Advertise';
import Categories from '../../Categories/Categories';
import HomeBottomBanner from '../HomeBottomBanner/HomeBottomBanner';
import Reviews from '../Reviews/Reviews';
import useDynamicTitle from '../../../../Hooks/useDynamicTitle';
import Hero from '../Hero/Hero';
import Products from '../../Products/Products';

const Home = () => {
    useDynamicTitle("Home")


    return (
        <div className='overflow-hidden'>
            <Hero></Hero>
            {/* <Advertise></Advertise> */}
            <Categories></Categories>
            <Products />
            <Reviews></Reviews>
            <HomeBottomBanner></HomeBottomBanner>
        </div>
    );
};

export default Home;