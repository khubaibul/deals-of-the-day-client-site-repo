import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Blocks } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthContext/AuthProvider';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const { data: myOrders = [], isLoading, refetch } = useQuery({
        queryKey: ["myOrders", user?.email],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/myOrders?email=${user?.email}`)
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
        <table className="border-collapse w-full lg:mr-20 my-10">
            <thead className='bg-yellow-500'>
                <tr>
                    <th className="p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden lg:table-cell">Image</th>
                    <th className="p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden lg:table-cell">Product Name</th>
                    <th className="p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden lg:table-cell">Price</th>
                    <th className="p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden lg:table-cell">Payment</th>
                </tr>
            </thead>
            <tbody>
                {
                    myOrders.length < 1 && <h3 className='text-center text-lg h-screen w-full flex justify-center items-center'>
                        You Haven't Any Booking Yet. Please
                        <Link to="/" className='underline underline-offset-2 ml-1'>  Booking...</Link></h3>
                }
                {
                    myOrders?.map(myOrder =>
                        <MyOrder
                            key={myOrder._id}
                            myOrder={myOrder}
                        >
                        </MyOrder>)
                }
            </tbody>
        </table>
    );
};

export default MyOrders;