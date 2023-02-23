import React from 'react';
import { FaShoppingBag, FaMailBulk } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TopNavBar = () => {
    return (
        <div className='hidden lg:block'>
            <div className='flex justify-between items-center w-[80%] mx-auto py-6'>
                <div className='flex items-center gap-x-2 text-lg'>
                    <FaMailBulk />
                    <p className='text-neutral font-semibold '>dealsOfTheDay@mail.com</p>
                </div>
                <div>
                    <h3 className='text-5xl font-bold'>
                        <span className='text-blue-900'>D</span>
                        <span className='text-yellow-500'>e</span>
                        <span className='text-blue-900'>a</span>
                        <span className='text-yellow-500'>l</span>
                        <span className='text-blue-900'>s</span>
                        <span className='text-yellow-500'> </span>
                        <span className='text-blue-900'>O</span>
                        <span className='text-yellow-500'>f</span>
                        <span className='text-yellow-500'> </span>
                        <span className='text-blue-900'>T</span>
                        <span className='text-yellow-500'>h</span>
                        <span className='text-blue-900'>e</span>
                        <span className='text-blue-900'> </span>
                        <span className='text-yellow-500'>D</span>
                        <span className='text-blue-900'>a</span>
                        <span className='text-yellow-500'>y</span>
                    </h3>
                </div>
                <div className='flex items-center gap-x-2'>
                    <button className='lg:text-3xl text-neutral'><FaShoppingBag /></button>
                    <Link to="/all-products" className='btn btn-sm bg-blue-900 hover:bg-yellow-500'>Order Now</Link>
                </div>
            </div>
        </div>
    );
};

export default TopNavBar;