import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';

const SellerDashBoard = () => {
    const { user } = useContext(AuthContext);

    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ["myProducts", user?.email],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/myProducts?email=${user?.email}`)
            .then(res => res.json())
    })
    const quantity = myProducts?.map(product => parseInt(product.availability));
    const myTotalProduct = quantity.reduce((prev, curr) => prev + curr, 0);

    const data = [
        {
            name: "Total Product",
            value: myTotalProduct
        },
        {
            name: "Sold",
            value: 3
        },
        {
            name: "Unsold",
            value: myTotalProduct - 3
        },

    ]
    const COLORS = ['#183661', '#ce048e', "#E0B715"];

    return (
        <div className='pt-8'>
            <p className='text-lg tracking-wide text-center'>Welcome to your dashboard <span className='font-bold italic text-red-600 text-xl'>{user?.displayName}</span></p>
            <div className='flex flex-col justify-center items-center mt-20'>
                <h4 className='font-bold text-2xl ml-10'>Your products status</h4>
                <div className='flex'>
                    <PieChart width={300} height={400}>
                        <Pie
                            data={data}
                            cx={100}
                            cy={100}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={2}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip></Tooltip>
                    </PieChart>
                    <div className='mt-16 flex flex-col gap-y-2'>
                        <div className='flex items-center gap-x-1.5'>
                            <div className='w-5 h-5 rounded-full bg-neutral'></div>
                            <p>Total Product</p>
                        </div>
                        <div className='flex items-center gap-x-1.5'>
                            <div className='w-5 h-5 rounded-full bg-accent'></div>
                            <p>Sold</p>
                        </div>
                        <div className='flex items-center gap-x-1.5'>
                            <div className='w-5 h-5 rounded-full bg-warning'></div>
                            <p>Unsold</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerDashBoard;