import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Blocks } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);

const Payment = () => {
    const { id } = useParams()
    console.log(id);

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
        <div className='flex items-center justify-center min-h-screen from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br w-full'>
            <div className="flex flex-col items-center justify-center relative lg:w-1/3">

                <div
                    id="partnerCard"
                    className="bg-neutral text-gray-50 overflow-hidden w-full rounded-md p-2 min-h-[500px] flex flex-col"
                >
                    <div>
                        <h3 className="text-center py-4 text-xl">
                            Payment
                        </h3>
                    </div>

                    <div>
                        <img className='h-72 w-full' src={productImage} alt="PaymentImage" />
                    </div>
                    <div className="grid grid-cols-2 px-8 py-2">
                        <h4>
                            {buyerName}
                        </h4>
                        <p>{buyerEmail}</p>
                    </div>
                    <div className='mt-2 bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] p-4 text-gray-900'>
                        <p className='text-center text-lg'>Payment Information</p>
                        <div className='text-center text-2xl font-bold'>
                            <h4>Name : {productName}</h4>
                            <h4>Total Pay : {price}</h4>
                        </div>
                    </div>
                    <div className='w-full my-4 p-4 bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]'>
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