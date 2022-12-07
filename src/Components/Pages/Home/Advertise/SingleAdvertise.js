import { faMoneyBill1 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleAdvertise = ({ product }) => {
    const { _id, category, price, productImage, productName, condition } = product;
    return (
        <div className="card card-compact w-full rounded-none bg-yellow-500 p-4 py-10">
            <div className='relative overflow-hidden transition duration-200 transform shadow-lg'>
                <figure>
                    <img className='w-full lg:h-96 h-32' src={productImage} alt="Shoes" />
                </figure>
                <div className='absolute inset-0 pt-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100 flex justify-center items-end'>
                    <div className='bg-neutral w-full text-center text-slate-200'>
                        <p><FontAwesomeIcon className='mr-1' icon={faMoneyBill1}></FontAwesomeIcon>BDT {price}</p>
                        <div className='flex text-xl justify-center gap-x-8 font-bold'>
                            <p>{category}</p>
                            <p>{productName}</p>
                            <p>{condition}</p>
                        </div>
                        <Link to={`/category-details/${category}`}><button className='btn rounded-none bg-yellow-500 hover:bg-yellow-500 text-neutral font-bold my-2'>Purchase Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleAdvertise;