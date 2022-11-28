import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import useDynamicTitle from '../../../Hooks/useDynamicTitle';

const DefaultDashBoard = () => {
    useDynamicTitle("Dashboard");
    const { user } = useContext(AuthContext);
    return (
        <div className='lg:mt-40'>
            <div className='mb-14'>
                <p className='text-3xl font-bold foods-text text-center uppercase'><span className='text-red-600'>Welcome to your dashboard {user?.displayName}</span></p>
            </div>
        </div>
    );
};

export default DefaultDashBoard;