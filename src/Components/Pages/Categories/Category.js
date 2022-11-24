import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category, _id }) => {
    return (
        <Link to={`/category-details/${_id}`}>
            <div className={`card w-full bg-yellow-500 rounded-none`}>
                <figure className="px-10 pt-10">
                    <img src="https://placeimg.com/400/225/arch" alt="Categories" className="rounded-none w-36" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">ROAD BIKE</h2>
                </div>
            </div>
        </Link>
    );
};

export default Category;