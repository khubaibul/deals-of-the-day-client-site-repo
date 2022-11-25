import React, { useState } from 'react';
import { FaClock, FaLocationArrow, FaUser } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark, faBug } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product, setSelectedProduct, handleWishList }) => {

    const { _id, productName, category, condition, originalPrice, price, productImage, usedFor, productDescription, addedDate, sellerInformation } = product;
    return (
        <div className="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
            <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                <div className="md:flex items-center -mx-10">
                    <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                        <div className="relative">
                            <img src={productImage} className="w-full relative z-10" alt="" />
                            <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-10">
                        <div className="flex">
                            <div>
                                <h1 className="font-bold uppercase text-2xl mb-5">{productName}</h1>
                                <p className="text-sm">{productDescription}</p>
                            </div>
                            <div className='flex gap-x-4'>
                                <button
                                    onClick={() => handleWishList(product)}><FontAwesomeIcon icon={faBookBookmark}></FontAwesomeIcon></button>
                                <button><FontAwesomeIcon icon={faBug}></FontAwesomeIcon></button>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-4 my-4 font-semibold'>
                            <h4 className='flex items-center gap-x-2'><FaLocationArrow></FaLocationArrow> {sellerInformation.sellerLocation}</h4>
                            <h4 className='flex items-center gap-x-2'> <FaClock></FaClock> Used : {(usedFor / 12).toFixed(1)} Year</h4>
                            <h4 className='flex items-center gap-x-2'> Post On : {addedDate}</h4>
                            <h4 className='flex items-center gap-x-2'> Condition : {condition}</h4>
                        </div>
                        <div>
                            <div className="inline-block align-bottom mr-5 mt-2">
                                <span className="text-lg leading-none align-baseline">Original Price : BDT </span>
                                <span className="font-bold text-xl leading-none align-baseline line-through text-red-600">{originalPrice}</span>
                            </div>
                            <div className="inline-block align-bottom mr-5">
                                <span className="text-xl leading-none align-baseline">Selling Price : BDT </span>
                                <span className="font-bold text-3xl leading-none align-baseline">{price}</span>
                            </div>
                            <br />
                            <div>
                                <h4 className='flex items-center gap-x-2 mt-4 font-semibold text-lg'>
                                    <FaUser></FaUser>
                                    {sellerInformation.sellerName} ✅</h4>
                            </div>
                            <div className="inline-block align-bottom mt-4">
                                <label
                                    onClick={setSelectedProduct(product)}
                                    label htmlFor="bookingModal"
                                    className="bg-neutral  text-yellow-500 rounded-full px-10 py-2 font-semibold">
                                    BOOK NOW
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;