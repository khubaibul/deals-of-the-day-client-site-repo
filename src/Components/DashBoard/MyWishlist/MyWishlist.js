import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Blocks } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import useDynamicTitle from '../../../Hooks/useDynamicTitle';

const MyWishlist = () => {

    useDynamicTitle("MyWishlist-Dashboard");


    const { user } = useContext(AuthContext);
    const { data: myWishlist = [], isLoading, refetch } = useQuery({
        queryKey: ["my-wishlist"],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/my-wishlist/${user?.email}`)
            .then(res => res.json())
    })

    console.log(myWishlist);
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
                    <th className="p-3 font-bold uppercase border border-neutral hidden lg:table-cell">Image</th>
                    <th className="p-3 font-bold uppercase border border-neutral hidden lg:table-cell">Product Name</th>
                    <th className="p-3 font-bold uppercase border border-neutral hidden lg:table-cell">Price</th>
                    <th className="p-3 font-bold uppercase border border-neutral hidden lg:table-cell">Payment</th>
                </tr>
            </thead>
            <tbody>
                {
                    myWishlist.map(wishlistProduct =>
                        <tr className="bg-gray-200 text-white flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0 px-4">
                            <td className="w-full lg:w-auto p-3 text-center border border-b border-neutral block lg:table-cell relative lg:static">
                                <span className="lg:hidden absolute top-16 left-2 bg-neutral px-2 py-1 text-xs font-bold uppercase">Image</span>
                                <div className="avatar">
                                    <div className="w-28 rounded">
                                        <img src={wishlistProduct?.product?.productImage} alt="Product Img" />
                                    </div>
                                </div>
                            </td>
                            <td className="w-full lg:w-auto p-3 border border-b border-neutral text-center block lg:table-cell relative lg:static">
                                <span className="lg:hidden absolute top-3 left-2 bg-neutral px-2 py-1 text-xs font-bold uppercase">Product Name</span>
                                <span className="bg-neutral p-2 rounded-sm">{wishlistProduct?.product?.productName}</span>
                            </td>
                            <td className="w-full lg:w-auto p-3 border border-b border-neutral text-center block lg:table-cell relative lg:static">
                                <span className="lg:hidden absolute top-3 left-2 bg-neutral px-2 py-1 text-xs font-bold uppercase">Price</span>
                                <span className="bg-neutral p-2 rounded-sm">BDT {wishlistProduct?.product?.price}</span>
                            </td>
                            <td className="w-full lg:w-auto p-3 text-center border border-b border-neutral block lg:table-cell relative lg:static">
                                <span className="lg:hidden absolute top-4 left-2 bg-neutral px-2 py-1 text-xs font-bold uppercase">Payment</span>
                                {
                                    wishlistProduct?.paid ? <p className='bg-green-600 p-1 w-1/2 mx-auto font-semibold'>Paid ✅</p>
                                        :
                                        <Link to={`/dashboard/payment/${wishlistProduct?.productId}`}>
                                            <button
                                                className='bg-yellow-500 hover:bg-yellow-600 transition-all duration-200 text-neutral font-medium px-8 py-1 rounded-sm'>
                                                Pay
                                            </button>
                                        </Link>
                                }
                            </td>
                        </tr >
                    )
                }
            </tbody>
        </table>
    );
};

export default MyWishlist;