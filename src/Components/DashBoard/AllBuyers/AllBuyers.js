import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Blocks } from 'react-loader-spinner';
import SingleBuyer from './SingleBuyer';

const AllBuyers = () => {
    const [loading, setLoading] = useState(false);
    const { data: allBuyers = [], isLoading, refetch } = useQuery({
        queryKey: ["all-buyers"],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/all-buyers`,{
            headers: {
                authorization: `bearer ${localStorage.getItem("deals-of-the-day")}`
            }
        })
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

    const handleDeleteBuyer = email => {
        setLoading(true);
        fetch(`${process.env.REACT_APP_API_URL}/buyer-delete/${email}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success("Buyer Deleted Successfully...");
                    setLoading(false);
                    refetch();
                }
            })
    }

    return (
        <table className="border-collapse w-full lg:mr-20 my-10">
            <thead className='bg-yellow-500'>
                <tr>
                    <th className="p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden lg:table-cell">Buyer Name</th>
                    <th className="p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden lg:table-cell">Buyer Email</th>
                    <th className="p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden lg:table-cell">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    allBuyers.length < 1 && <h3 className='text-center text-lg h-screen w-full flex justify-center items-center'>No Buyer Here...</h3>
                }
                {
                    allBuyers?.map(buyer => <SingleBuyer
                        key={buyer._id}
                        buyer={buyer}
                        handleDeleteBuyer={handleDeleteBuyer}
                    >
                    </SingleBuyer>)
                }
            </tbody>
        </table>
    );
};

export default AllBuyers;