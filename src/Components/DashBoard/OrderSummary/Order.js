import React from 'react';
import { useState } from 'react';

const Order = ({ order }) => {
    const [detailOpen, setDetailOpen] = useState(false);
    const { bookingId, bookingProduct, transactionId } = order;
    console.log(order);
    return (
        <div className="w-full flex flex-col items-center justify-between lg:px-7 px-3 pb-4 border cursor-pointer rounded-sm border-[#6A64F1] my-2">
            <div className='flex lg:flex-row md:flex-row flex-col items-center justify-between w-full'>
                <img className="rounded-t-lg p-2 w-24" src={bookingProduct?.productImage} alt="product" />
                <div>
                    <h2 className="font-semibold text-neutral text-lg">{bookingProduct?.productName}</h2>
                    <p className='lg:text-base text-sm'>Transaction ID: <span className='uppercase text-lg ml-1'>{transactionId.slice(0, 20)}</span></p>
                </div>
                <div className='flex gap-x-4 items-center'>
                    <div className="">
                        <button
                            onClick={() => setDetailOpen(!detailOpen)}
                            className='bg-yellow-500 text-white hover:bg-yellow-600 font-medium py-1 text-center w-24 cursor-pointer'>
                            Detail
                        </button>
                    </div>
                </div>
            </div>
            {
                detailOpen &&
                <div className='w-full pt-4'>
                    <div>
                        <div class="overflow-hidden rounded-full bg-gray-200">
                            <div class="h-2 w-1/2 rounded-full bg-blue-500"></div>
                        </div>

                        <ol class="mt-4 grid grid-cols-3 text-sm font-medium text-gray-500">
                            <li class="flex items-center justify-start text-blue-600">
                                <span class="hidden sm:inline"> Payment Pending </span>
                                <svg
                                    class="h-6 w-6 sm:ml-2 sm:h-5 sm:w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                    />
                                </svg>
                            </li>

                            <li class="flex items-center justify-center text-blue-600">
                                <span class="hidden sm:inline"> Shipped </span>

                                <svg
                                    class="h-6 w-6 sm:ml-2 sm:h-5 sm:w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </li>

                            <li class="flex items-center justify-end">
                                <span class="hidden sm:inline"> Delivered </span>
                                <svg
                                    class="h-6 w-6 sm:ml-2 sm:h-5 sm:w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                                    />
                                </svg>
                            </li>
                        </ol>
                    </div>
                </div>
            }
        </div>
    );
};

export default Order;