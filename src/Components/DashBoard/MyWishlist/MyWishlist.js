import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Blocks } from 'react-loader-spinner';

const MyWishlist = () => {
    // const { data: myWishlist = [], isLoading, refetch } = useQuery({
    //     queryKey: ["my-wishlist"],
    //     queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/my-wishlist`)
    //         .then(res => res.json())
    // })

    // if (isLoading) {
    //     return <div className='flex justify-center mt-10'>
    //         <Blocks
    //             visible={true}
    //             height="80"
    //             width="80"
    //             ariaLabel="blocks-loading"
    //             wrapperStyle={{}}
    //             wrapperClass="blocks-wrapper"
    //         />
    //     </div>
    // }

    return (
        <table className="border-collapse w-full lg:mr-20 my-10">
            <thead className='bg-yellow-500'>
                <h1 className="mb-5 text-3xl font-bold text-neutral text-center">MY WISHLIST</h1>
                <tr>
                    <th className="p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden lg:table-cell">Product Name</th>
                    <th className="p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden lg:table-cell">Purchase</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    );
};

export default MyWishlist;