import React from 'react';

const MyProduct = ({ myProduct, handleProductDelete, handleProductAdvertise, advertised }) => {
    const { _id, productId, price, productImage, productName, availability } = myProduct;
    console.log(myProduct);
    return (
        <tr className="bg-gray-200 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0 px-4">
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-neutral block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-14 left-2 bg-neutral text-slate-200 px-2 py-1 text-xs uppercase">Image</span>
                <div className="avatar">
                    <div className="w-28 rounded">
                        <img src={productImage} alt="Product Img" />
                    </div>
                </div>
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-neutral block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-3 left-2 bg-neutral text-slate-200 px-2 py-1 text-xs font-bold uppercase">Product Name</span>
                <span className="bg-neutral px-2 py-1 text-sm text-slate-300 rounded-sm">{productName}</span>
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-neutral block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-3 left-2 bg-neutral text-slate-200 px-2 py-1 text-xs font-bold uppercase">Price</span>
                <span className="bg-neutral px-2 py-1 text-sm text-slate-300 rounded-sm">BDT {price}</span>
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-neutral block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-8 left-2 bg-neutral text-slate-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                <div className='flex flex-col gap-y-2 items-center'>
                    <p className="bg-warning px-2 py-1 text-sm rounded-sm w-[100px]">Sold
                        <span className='font-bold text-red-700 ml-1'>{myProduct?.sell ? myProduct.sell : "0"}</span>
                    </p>
                    <p className="bg-warning px-2 py-1 text-sm rounded-sm w-[100px]">Unsold
                        <span className='font-bold text-red-700 ml-1'>{availability}</span>
                    </p>
                </div>
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-neutral text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-8 left-2 bg-neutral text-slate-200 px-2 py-1 text-xs font-bold uppercase">Action</span>
                <div className='flex flex-col gap-y-2 items-center'>
                    {/* <button
                        onClick={() => handleProductAdvertise(_id)}
                        className='bg-neutral hover:bg-info active:bg-opacity-60 font-bold transition-all duration-200 px-3 py-0.5 text-sm text-slate-300 rounded-sm w-[100px]'>
                        {
                            myProduct?.featured ? <span>Advertised</span>
                                : <span>Advertise</span>
                        }
                    </button> */}

                    {
                        myProduct?.featured ?
                            <span className='bg-green-600 px-3 rounded-sm'>Advertised</span>
                            : <button
                                onClick={() => handleProductAdvertise(_id)}
                                className='bg-neutral hover:bg-info active:bg-opacity-60 font-bold transition-all duration-200 px-3 py-0.5 text-sm text-slate-300 rounded-sm w-[100px]'>
                                Advertise
                            </button>
                    }
                </div>
            </td>
        </tr>
    );
};

export default MyProduct;