import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Blocks } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import useDynamicTitle from '../../../Hooks/useDynamicTitle';

const MyWishlist = () => {

    useDynamicTitle("MyWishlist-Dashboard")


    const { user } = useContext(AuthContext);
    const { data: myWishlist = [], isLoading, refetch } = useQuery({
        queryKey: ["my-wishlist"],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/my-wishlist/${user?.email}`)
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
    console.log(myWishlist);
    return (
        <table className="border-collapse w-full lg:mr-20 my-10">
            <thead className='bg-yellow-500'>
                <tr>
                    <th className="p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden lg:table-cell">Product Name</th>
                    <th className="p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden lg:table-cell">Purchase</th>
                </tr>
            </thead>
            <tbody>
                {
                    myWishlist.map(wishlistProduct =>
                        <tr
                            key={wishlistProduct._id}
                            className="bg-gray-400 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Product Name</span>
                                <span className="bg-neutral p-2 font-bold text-slate-300">{wishlistProduct.productName}</span>
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Purchase</span>
                                <Link to={`/dashboard/payment/${wishlistProduct.productId}`}>
                                    <button className="bg-neutral p-2 font-bold text-slate-300">Purchase</button>
                                </Link>
                            </td>
                        </tr>)
                }
            </tbody>
        </table>
    );
};

export default MyWishlist;