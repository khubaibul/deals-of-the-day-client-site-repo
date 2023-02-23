import React from 'react';

const SingleBuyer = ({ buyer, handleDeleteBuyer }) => {
    const { email, userName } = buyer;
    return (
        <tr className="bg-gray-200 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0 px-4">
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-neutral block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-3 left-2 bg-neutral text-slate-300 px-2 py-1 text-xs uppercase">Seller Name</span>
                <span className="bg-neutral p-2 text-sm text-slate-300 rounded-sm">{userName}</span>
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-neutral block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-3 left-2 bg-neutral text-slate-300 px-2 py-1 text-xs uppercase">Seller Email</span>
                <span className="bg-neutral p-2 text-sm text-slate-300 rounded-sm">{email}</span>
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-neutral block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-3 left-2 bg-neutral px-2 py-1 text-xs text-slate-300 uppercase">Action</span>
                <div className='flex flex-col gap-y-2 w-1/2 mx-auto'>
                    <button
                        onClick={() => handleDeleteBuyer(email)}
                        className='bg-red-500 hover:bg-red-500 rounded-sm px-4 text-slate-100 w-[100px] mx-auto'>Delete</button>
                </div>
            </td>
        </tr>
    );
};

export default SingleBuyer;