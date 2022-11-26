import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Blocks } from 'react-loader-spinner';
import useDynamicTitle from '../../../Hooks/useDynamicTitle';
import SmallSpinner from '../../Shared/Button/SmallSpinner';
import SingleSeller from './SingleSeller';

const AllSellers = () => {

    useDynamicTitle("AllSellers-Dashboard")
    const [loading, setLoading] = useState(false);
    const { data: allSellers = [], isLoading, refetch } = useQuery({
        queryKey: ["all-sellers"],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/all-sellers`)
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

    const handleSellerVerification = (email) => {
        fetch(`${process.env.REACT_APP_API_URL}/seller-verification`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success("This Seller Is Now A Verified Seller")
                }
                else {
                    toast.error("Already Verified.")
                }
            })
    }


    const handleSellerDelete = (email) => {
        setLoading(true);
        fetch(`${process.env.REACT_APP_API_URL}/seller-delete/${email}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success("Seller Deleted Successfully...");
                    setLoading(false);
                    refetch();
                }
            })
    }


    return (
        <table className="border-collapse w-full lg:mr-20 my-10">
            {
                loading && <SmallSpinner></SmallSpinner>
            }
            <thead className='bg-yellow-500'>
                <tr>
                    <th className="p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden lg:table-cell">Seller Name</th>
                    <th className="p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden lg:table-cell">Seller Email</th>
                    <th className="p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden lg:table-cell">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    allSellers.length < 1 && <h3 className='text-center text-lg h-screen w-full flex justify-center items-center'>No Seller Here...</h3>
                }
                {
                    allSellers?.map(seller =>
                        <SingleSeller
                            key={seller._id}
                            seller={seller}
                            handleSellerVerification={handleSellerVerification}
                            handleSellerDelete={handleSellerDelete}
                        >
                        </SingleSeller>)
                }
            </tbody>
        </table>
    );
};

export default AllSellers;