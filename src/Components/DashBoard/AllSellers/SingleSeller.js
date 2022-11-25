import React from 'react';

const SingleSeller = ({ seller }) => {
    const { email, userName } = seller;
    return (
        <tr className="bg-gray-400 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Seller Name</span>
                <span className="bg-neutral p-2 font-bold text-slate-300">{userName}</span>
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Seller Email</span>
                <span className="bg-neutral p-2 font-bold text-slate-300">{email}</span>
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Action</span>
                <div className='flex flex-col gap-y-2 w-1/2 mx-auto'>
                    <button className='btn btn-sm bg-neutral rounded-none px-6 text-slate-300 font-semibold'>Verification</button>
                    <button className='btn btn-sm bg-red-500 hover:bg-red-500 rounded-none px-6 text-slate-300 font-semibold'>Delete</button>
                </div>
            </td>
        </tr>
    );
};

export default SingleSeller;