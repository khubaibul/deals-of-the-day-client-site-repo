import React from 'react';
import Category from './Category';

const Categories = () => {
    return (
        <div className='my-24'>
            <p className="text-center text-3xl my-5">Categories</p>
            <div className='grid lg:grid-cols-6 gap-2'>
                {
                    [...Array(6)].map((category, i) => <Category category={category} _id={i} key={i}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;