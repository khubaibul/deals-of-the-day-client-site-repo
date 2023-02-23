import React from 'react';

const SingleSeller = ({ seller, handleSellerVerification, handleSellerDelete }) => {
    const { email, userName } = seller;
    return (
        <tr className="bg-gray-200 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0 px-4">
            <td className="w-full lg:w-auto p-3 text-slate-200 border border-b border-neutral text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-3 left-3 bg-neutral px-2 py-1 text-xs">Seller Name</span>
                <span className="bg-neutral p-2 text-sm text-slate-300 rounded-sm">{userName}</span>
            </td>
            <td className="w-full lg:w-auto p-3 text-slate-200 border border-b border-neutral text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-3 left-3 bg-neutral px-2 py-1 text-xs">Seller Email</span>
                <span className="bg-neutral p-2 text-sm text-slate-300 rounded-sm">{email}</span>
            </td>
            <td className="w-full lg:w-auto p-3 text-slate-200 text-center border border-b border-neutral block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-7 left-3 bg-neutral px-2 py-1 text-xs">Action</span>
                <div className='flex flex-col items-center gap-y-2 mx-auto'>
                    <button
                        onClick={() => handleSellerVerification(email)}
                        className='bg-neutral rounded-sm px-3'>Verification</button>
                    <button
                        onClick={() => handleSellerDelete(email)}
                        className='bg-red-500 rounded-sm px-3'>Delete</button>
                </div>
            </td>
        </tr>
    );
};

export default SingleSeller;