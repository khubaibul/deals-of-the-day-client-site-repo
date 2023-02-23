import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import SmallSpinner from '../../Shared/Button/SmallSpinner';

const CheckoutForm = ({ bookingProduct }) => {
    const [loading, setLoading] = useState(false);
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState("");
    const [transactionId, setTransactionId] = useState("")
    const [cardError, setCardError] = useState('');
    const { user } = useContext(AuthContext);

    const { buyerEmail, buyerName, price, productImage, productName, _id } = bookingProduct;
    console.log(user?.email);

    const navigate = useNavigate();


    const stripe = useStripe();
    const elements = useElements();


    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/create-payment-intent`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // authorization: `bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret)
            });
    }, [price]);
    console.log(clientSecret);

    const handleSubmit = async e => {
        setLoading(true);
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
            setLoading(false)
        } else {
            setCardError("");
        }


        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: buyerEmail
                    }
                }
            }
        );

        if (confirmError) {
            console.log(confirmError.message);
            setCardError(confirmError.message);
            setLoading(false)
            return;
        }
        if (paymentIntent.status === "succeeded") {

            const payment = {
                bookingId: _id,
                buyerEmail: user?.email,
                bookingProduct,
                transactionId: paymentIntent.id,
            }

            fetch(`${process.env.REACT_APP_API_URL}/payment`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    // authorization: `bearer ${localStorage.getItem("accessToken")}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setSuccess("Success");
                        setTransactionId(paymentIntent.id);
                        toast.success("Transaction Complete");
                        setLoading(false);
                        navigate("/dashboard/order-summary")
                    }
                });
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='my-4 text-neutral'>
                <p>Card Number: <br /> 2223003122003222 | 378282246310005 | 6011981111111113</p>
                <div className='flex gap-x-4'>
                    <p>Date: Any future date</p>
                    <p>CVC: Any four number</p>
                </div>
            </div>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#000000',
                            '::placeholder': {
                                color: '#000000',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button
                className='bg-neutral px-8 py-1 rounded-sm mt-8 hover:bg-[#6E45E2] transition-all duration-200'
                type="submit" disabled={!stripe || !clientSecret}>
                {
                    loading
                        ? <SmallSpinner></SmallSpinner>
                        : "Pay"
                }
            </button>
            <p className='text-red-800'>{cardError}</p>
            <div>
                {
                    transactionId && <p className='text-green-600 font-semibold'>Transaction ID : <span className='text-red-600 font-bold uppercase'>{transactionId}</span></p>
                }
                {
                    success && <p className='text-green-600 font-semibold'>Status: {success}</p>
                }
            </div>
        </form>
    );
};

export default CheckoutForm;