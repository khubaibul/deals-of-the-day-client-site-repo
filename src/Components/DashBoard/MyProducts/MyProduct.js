import React from 'react';

const MyProduct = ({ myProduct }) => {
    const { productId, price, productImage, productName, _id, paid } = myProduct;
    console.log(paid);
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
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                <div className='flex flex-col gap-y-2'>
                    {
                        myProduct.paid
                            ? <span className="bg-green-500 p-2 font-bold text-slate-100">Sold</span>
                            :
                            <span className="bg-yellow-900 p-2 font-bold text-slate-300">Unsold</span>
                    }
                </div>
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Action</span>
                {
                    myProduct?.paid ? <span className="bg-green-500 p-2 font-bold text-slate-100">Sold</span>
                        :
                        <div className='flex flex-col gap-y-2 w-1/2 mx-auto'>
                            <button className='btn btn-sm bg-red-500 hover:bg-red-500 rounded-none px-6 text-slate-300 font-semibold'>Delete</button>
                            <button className='btn btn-sm bg-neutral rounded-none px-6 text-slate-300 font-semibold'>Advertise</button>
                        </div>
                }
            </td>
        </tr>
    );
};

export default MyProduct;