import React from 'react';

const Category = ({ item }) => {
    return (
        <div className={`card w-full bg-neutral rounded hover:bg-info transition-all duration-300`}>
            <figure className="px-10 pt-10">
                <img src={item.img} alt="Categories" className="rounded-none lg:w-48 md:w-56 w-full h-40" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className={`mb-5 text-3xl font-bold text-white`}>{item.name}</h2>
            </div>
        </div>
    );
};

export default Category;