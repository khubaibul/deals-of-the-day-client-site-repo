import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryDetails = () => {
    const categoryProduct = useLoaderData();
    console.log(categoryProduct);
    return (
        <div className='flex justify-center h-screen items-center'>
            <div className='w-20 h-20 rounded-full border-neutral border-8 border-dashed animate-spin'></div>
            <div className='w-20 h-20 rounded-full border-yellow-500 border-8 border-dashed animate-spin'></div>
            <div className='w-20 h-20 rounded-full border-neutral border-8 border-dashed animate-spin'></div>
        </div>
    );
};

export default CategoryDetails;