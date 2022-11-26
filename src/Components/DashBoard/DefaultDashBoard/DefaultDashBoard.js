import React from 'react';
import useDynamicTitle from '../../../Hooks/useDynamicTitle';

const DefaultDashBoard = () => {
    useDynamicTitle("Dashboard")
    return (
        <div className='lg:mt-40'>
            <div className='mb-14'>
                <p className='text-4xl font-bold foods-text text-center'><span className='text-red-600'>DASHBOARD</span></p>
            </div>
        </div>
    );
};

export default DefaultDashBoard;