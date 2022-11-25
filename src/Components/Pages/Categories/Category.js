import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { _id, category_img, category_name, bg_class, text_color } = category;
    return (
        <Link to={`/category-details/${category_name}`}>
            <div className={`card w-full ${bg_class} rounded-none`}>
                <figure className="px-10 pt-10">
                    <img src={category_img} alt="Categories" className="rounded-none w-36" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className={`mb-5 text-3xl font-bold ${text_color}`}>{category_name}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Category;