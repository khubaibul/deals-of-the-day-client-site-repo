import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { Blocks } from 'react-loader-spinner';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import useDynamicTitle from '../../../Hooks/useDynamicTitle';
import Order from './Order';

const OrderSummary = () => {
    useDynamicTitle("Order Summary - Dashboard");


    const { user } = useContext(AuthContext);
    const { data: orderSummary = [], isLoading, refetch } = useQuery({
        queryKey: ["orderSummary"],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/order-summary/${user?.email}`)
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
    return (
        <section className='w-full flex mt-10'>
            <div className='lg:w-[50%] md:w-[80%] w-[95%] lg:ml-20 mx-auto lg:mx-0'>
                {
                    orderSummary?.map(order => <Order key={order._id} order={order} />)
                }
            </div>
        </section>
    );
};

export default OrderSummary;