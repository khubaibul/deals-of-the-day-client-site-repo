import React from 'react';
import { Link } from 'react-router-dom';

const MyOrder = ({ myOrder }) => {
    const { _id, productId, product } = myOrder;
    console.log(myOrder);
    return (
        <tr className="bg-gray-200 text-white flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0 px-4">
            <td className="w-full lg:w-auto p-3 text-center border border-b border-neutral block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-16 left-2 bg-neutral px-2 py-1 text-xs font-bold uppercase">Image</span>
                <div className="avatar">
                    <div className="w-28 rounded">
                        <img src={product?.productImage} alt="Product Img" />
                    </div>
                </div>
            </td>
            <td className="w-full lg:w-auto p-3 border border-b border-neutral text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-3 left-2 bg-neutral px-2 py-1 text-xs font-bold uppercase">Product Name</span>
                <span className="bg-neutral p-2 rounded-sm">{product?.productName}</span>
            </td>
            <td className="w-full lg:w-auto p-3 border border-b border-neutral text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-3 left-2 bg-neutral px-2 py-1 text-xs font-bold uppercase">Price</span>
                <span className="bg-neutral p-2 rounded-sm">BDT {product?.price}</span>
            </td>
            <td className="w-full lg:w-auto p-3 text-center border border-b border-neutral block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-4 left-2 bg-neutral px-2 py-1 text-xs font-bold uppercase">Payment</span>
                {
                    myOrder?.paid ? <p className='bg-green-600 p-1 w-1/2 mx-auto font-semibold'>Paid ✅</p>
                        :
                        <Link to={`/dashboard/payment/${productId}`}>
                            <button
                                className='bg-yellow-500 hover:bg-yellow-600 text-neutral transition-all duration-200 font-medium px-8 py-1 rounded-sm'>
                                Pay
                            </button>
                        </Link>
                }
            </td>
        </tr >
    );
};

export default MyOrder;