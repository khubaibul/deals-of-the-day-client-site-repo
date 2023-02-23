import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import useAdmin from '../../../Hooks/useAdmin';
import useDynamicTitle from '../../../Hooks/useDynamicTitle';
import useSeller from '../../../Hooks/useSeller';
import AdminDashBoard from './AdminDashBoard';
import SellerDashBoard from './SellerDashBoard';

const DefaultDashBoard = () => {
    useDynamicTitle("Dashboard");
    const { user } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const [isSeller, isSellerLoading] = useSeller(user?.email);

    const { data: allBuyers = [], isLoading, refetch } = useQuery({
        queryKey: ["all-buyers"],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/all-buyers`, {
            headers: {
                authorization: `bearer ${localStorage.getItem("deals-of-the-day")}`
            }
        })
            .then(res => res.json())
    })



    return (
        <section>
            {
                isAdmin && <AdminDashBoard />
            }
            {
                isSeller && <SellerDashBoard />
            }
            {
                (!isAdmin && !isSeller) &&
                <div className='flex flex-col lg:w-[50vw] items-center mt-20'>
                    <p className='text-lg tracking-wide'>Welcome to your dashboard <span className='font-bold italic text-red-600 text-xl'>{user?.displayName}</span></p>
                    <img src={user?.photoURL} className="w-72" alt="" />
                </div>
            }
        </section >
    );
};

export default DefaultDashBoard;