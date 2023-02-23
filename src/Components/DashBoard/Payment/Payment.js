import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Blocks } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import useDynamicTitle from '../../../Hooks/useDynamicTitle';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);

const Payment = () => {
    useDynamicTitle("Payments")
    const { id } = useParams();


    const { data: bookingProduct, isLoading, refetch } = useQuery({
        queryKey: ["all-sellers"],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/booking-payment/${id}`)
            .then(res => res.json())
    })

    if (isLoading) {
        return <div className='flex justify-center mt-10'>
            <Blocks
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
            />
        </div>
    }
    const { buyerEmail, buyerName, price, productId, productImage, productName, _id } = bookingProduct;
    console.log(bookingProduct);
    if (bookingProduct?.paid) {
        return <div>
            <h2 className='text-red-500 text-2xl font-bold text-center mt-10'>This Product Is Already Sold. Try Another Product.</h2>
        </div>
    }
    return (
        <div className='flex pt-8 justify-center from-[#88D3C3] to-[#6E45E2] bg-gradient-to-r w-full'>
            <div className="flex flex-col items-center lg:w-1/3">

                <div
                    id="partnerCard"
                    className="bg-neutral text-gray-50 overflow-hidden w-full rounded-sm px-1 flex flex-col pt-2"
                >
                    <div>
                        <h3 className="text-center text-xl">
                            Payment
                        </h3>
                    </div>

                    <div>
                        <img className='h-full w-64 mx-auto' src={productImage} alt="PaymentImage" />
                    </div>
                    <div className="grid grid-cols-2 px-8 py-2">
                        <h4>
                            {buyerName}
                        </h4>
                        <p>{buyerEmail}</p>
                    </div>
                    <div className='mt-2 bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] px-4 py-1 text-gray-900'>
                        <p className='text-center text-lg'>Payment Information</p>
                        <div className='text-center'>
                            <h4 className='text-2xl'>Name : {productName}</h4>
                            <h4 className='text-xl'>Total Pay : <span className='text-sm'>BDT</span>{price}</h4>
                        </div>
                    </div>
                    <div className='w-full my-4 px-2 py-1 bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]'>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm
                                bookingProduct={bookingProduct}
                            />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;