import React from 'react';

const MyOrder = ({ myOrder }) => {
    const { productId, price, productImage, productName, _id } = myOrder;
    return (
        <tr className="bg-gray-400 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Image</span>
                <div className="avatar">
                    <div className="w-28 rounded">
                        <img src={productImage} alt="Product Img" />
                    </div>
                </div>
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Product Name</span>
                <span className="bg-neutral p-2 font-bold text-slate-300">{productName}</span>
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Price</span>
                <span className="bg-neutral p-2 font-bold text-slate-300">BDT {price}</span>
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Payment</span>
                <button className='btn btn-sm bg-neutral rounded-none px-6 text-slate-300 font-semibold'>Pay</button>
            </td>
        </tr>
    );
};

export default MyOrder;