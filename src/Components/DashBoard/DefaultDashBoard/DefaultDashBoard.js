import React from 'react';
// import useDynamicTitle from '../../Hooks/useDynamicTitle';

const DefaultDashBoard = () => {
    // useDynamicTitle("Admin Dashboard")
    return (
        <div className='lg:mt-40'>
            <div className='mb-14'>
                <p className='text-4xl font-bold foods-text text-center'><span className='text-red-600'>ADMIN DASHBOARD</span></p>
                <p className='text-center foods-header'>
                    Add Products/Foods. Control Traffic. Accept Orders. Give Customers Questions Answer As Soon As Possible.
                </p>
            </div>
            <div class="flex bg-pink-500 justify-center items-center">
                <div class="mt-4 w-full h-40 lg:w-6/12 xl:w-3/12 px-5 mb-4">
                    <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg">
                        <div class="flex-auto p-4">
                            <div class="flex flex-wrap">
                                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 class="text-blueGray-400 uppercase font-bold text-xs"> Traffic</h5>
                                    <span class="font-semibold text-xl text-blueGray-700">334,100</span>
                                </div>
                                <div class="relative w-auto pl-4 flex-initial">
                                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-red-500">
                                        <i class="fas fa-chart-bar"></i>
                                    </div>
                                </div>
                            </div>
                            <p class="text-sm text-blueGray-400 mt-4">
                                <span class="text-emerald-500 mr-2"><i class="fas fa-arrow-up"></i> 2,99% </span>
                                <span class="whitespace-nowrap"> Since last month </span></p>
                        </div>
                    </div>
                </div>

                <div class=" mt-4 w-full h-40 lg:w-6/12 xl:w-3/12 px-5">
                    <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-4 xl:mb-0 shadow-lg">
                        <div class="flex-auto p-4">
                            <div class="flex flex-wrap">
                                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 class="text-blueGray-400 uppercase font-bold text-xs">New users</h5>
                                    <span class="font-semibold text-xl text-blueGray-700">2,999</span>
                                </div>
                                <div class="relative w-auto pl-4 flex-initial">
                                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-pink-500">
                                        <i class="fas fa-chart-pie"></i>
                                    </div>
                                </div>
                            </div>
                            <p class="text-sm text-blueGray-400 mt-4">
                                <span class="text-red-500 mr-2"><i class="fas fa-arrow-down"></i> 4,01%</span>
                                <span class="whitespace-nowrap"> Since last week </span></p>
                        </div>
                    </div>
                </div>

                <div class="mt-4 w-full h-40 lg:w-6/12 xl:w-3/12 px-5">
                    <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                        <div class="flex-auto p-4">
                            <div class="flex flex-wrap">
                                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 class="text-blueGray-400 uppercase font-bold text-xs">Sales</h5>
                                    <span class="font-semibold text-xl text-blueGray-700">901</span>
                                </div>
                                <div class="relative w-auto pl-4 flex-initial">
                                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-lightBlue-500">
                                        <i class="fas fa-users"></i>
                                    </div>
                                </div>
                            </div>
                            <p class="text-sm text-blueGray-400 mt-4">
                                <span class="text-red-500 mr-2"><i class="fas fa-arrow-down"></i> 1,25% </span>
                                <span class="whitespace-nowrap"> Since yesterday </span></p>
                        </div>
                    </div>
                </div>

                <div class="mt-4 w-full h-40 lg:w-6/12 xl:w-3/12 px-5">
                    <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                        <div class="flex-auto p-4">
                            <div class="flex flex-wrap">
                                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 class="text-blueGray-400 uppercase font-bold text-xs">Performance</h5>
                                    <span class="font-semibold text-xl text-blueGray-700">51.02% </span>
                                </div>
                                <div class="relative w-auto pl-4 flex-initial">
                                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-emerald-500">
                                        <i class="fas fa-percent"></i>
                                    </div>
                                </div>
                            </div>
                            <p class="text-sm text-blueGray-400 mt-4">
                                <span class="text-emerald-500 mr-2"><i class="fas fa-arrow-up"></i> 12% </span>
                                <span class="whitespace-nowrap"> Since last mounth </span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DefaultDashBoard;