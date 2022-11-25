import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Blocks } from 'react-loader-spinner';
import SingleSeller from './SingleSeller';

const AllSellers = () => {
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

    return (
        <table className="border-collapse w-full lg:mr-20 my-10">
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
                    allSellers?.map(seller => <SingleSeller seller={seller} key={seller._id}></SingleSeller>)
                }
            </tbody>
        </table>
    );
};

export default AllSellers;