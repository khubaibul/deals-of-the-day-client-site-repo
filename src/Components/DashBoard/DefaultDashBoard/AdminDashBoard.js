import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AdminDashBoard = () => {
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
        <div className="flex overflow-hidden pt-8">
            <div id="main-content" className="h-full w-full relative overflow-y-auto">
                <main>
                    <div className="pt-6 px-4">
                        <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">2,340</span>
                                        <h3 className="text-base font-normal text-gray-500">New products this week</h3>
                                    </div>
                                    <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                                        14.6%
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">5,355</span>
                                        <h3 className="text-base font-normal text-gray-500">Visitors this week</h3>
                                    </div>
                                    <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                                        32.9%
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">385</span>
                                        <h3 className="text-base font-normal text-gray-500">User signups this week</h3>
                                    </div>
                                    <div className="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
                                        -2.7%
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
                            <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold leading-none text-gray-900">Latest Customers</h3>
                                    <button className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2">
                                        View all
                                    </button>
                                </div>
                                <div className="flow-root">
                                    <ul className="divide-y divide-gray-200">
                                        {
                                            allBuyers.slice(0, 5)?.map(buyer =>
                                                <li className="py-3 sm:py-4">
                                                    <div className="flex items-center space-x-4">
                                                        <div className="flex-shrink-0">
                                                            <img className="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/neil-sims.png" alt="Neil" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="font-medium text-gray-900">
                                                                {buyer?.userName}
                                                            </p>
                                                            <p className="text-sm text-gray-500 truncate">
                                                                <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="17727a767e7b57607e7973646372653974787a">{buyer?.email}</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        }

                                    </ul>
                                </div>
                            </div>
                            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                                <h3 className="text-xl leading-none font-bold text-gray-900 mb-10">Acquisition Overview</h3>
                                <div className="block w-full overflow-x-auto">
                                    <table className="items-center w-full bg-transparent border-collapse">
                                        <thead>
                                            <tr>
                                                <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Top Channels</th>
                                                <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Users</th>
                                                <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"></th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            <tr className="text-gray-500">
                                                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Organic Search</th>
                                                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">5,649</td>
                                                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">
                                                        <span className="mr-2 text-xs font-medium">30%</span>
                                                        <div className="relative w-full">
                                                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                                                <div className="bg-cyan-600 h-2 rounded-sm w-[30%]"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="text-gray-500">
                                                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Referral</th>
                                                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">4,025</td>
                                                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">
                                                        <span className="mr-2 text-xs font-medium">24%</span>
                                                        <div className="relative w-full">
                                                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                                                <div className="bg-orange-300 h-2 rounded-sm w-[24%]"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="text-gray-500">
                                                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Direct</th>
                                                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">3,105</td>
                                                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">
                                                        <span className="mr-2 text-xs font-medium">18%</span>
                                                        <div className="relative w-full">
                                                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                                                <div className="bg-teal-400 h-2 rounded-sm w-[18%]"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="text-gray-500">
                                                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Social</th>
                                                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">1251</td>
                                                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">
                                                        <span className="mr-2 text-xs font-medium">12%</span>
                                                        <div className="relative w-full">
                                                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                                                <div className="bg-pink-600 h-2 rounded-sm w-[12%]"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="text-gray-500">
                                                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Other</th>
                                                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">734</td>
                                                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">
                                                        <span className="mr-2 text-xs font-medium">9%</span>
                                                        <div className="relative w-full">
                                                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                                                <div className="bg-indigo-600 h-2 rounded-sm w-[9%]"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="text-gray-500">
                                                <th className="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">Email</th>
                                                <td className="border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0">456</td>
                                                <td className="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                                                    <div className="flex items-center">
                                                        <span className="mr-2 text-xs font-medium">7%</span>
                                                        <div className="relative w-full">
                                                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                                                <div className="bg-purple-500 h-2 rounded-sm w-[7%]"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminDashBoard;