import React from 'react';

const Blogs = () => {

    // useDynamicTitle("Blogs")


    return (
        <div className='bg-yellow-50'>
            <div className='lg:w-4/5 mx-auto w-full flex flex-col gap-y-4 p-24'>
                <div>
                    <div className="collapse rounded">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
                            <h2 className='font-bold'>DIFFERENCE BETWEEN SQL AND NoSQL</h2>
                        </div>

                        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-accent peer-checked:text-secondary-content">
                            <div className="py-1 bg-blueGray-50">
                                <div className="w-full mx-auto mt-10">
                                    <div className="relative flex flex-col break-words bg-white w-full mb-6 shadow-lg rounded ">
                                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                                            <div className="flex flex-wrap items-center">
                                                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                                    <h3 className="font-bold text-base text-center text-blueGray-700">DIFFERENCE BETWEEN SQL AND NoSQL</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="block w-full overflow-x-auto">
                                            <table className="items-center bg-transparent w-full border-collapse ">
                                                <thead>
                                                    <tr>
                                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                                                            DIFFERENCE
                                                        </th>
                                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                                                            SQL
                                                        </th>
                                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                                                            NoSQL
                                                        </th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                                            Type
                                                        </th>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                            Relational
                                                        </td>
                                                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Non-Relational
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                            Data
                                                        </th>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Structured Data stored in Tables
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Unstructured stored in JSON files but the graph database does supports relationship.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                            Schema
                                                        </th>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Static
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Dynamic
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                            Scalability
                                                        </th>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Vertical
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Horizontal
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                            Language
                                                        </th>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Structured Query Language
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Un-structured Query Language
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                            Joins
                                                        </th>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Helpful to design complex queries.
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            No joins, don't have the powerful interface to prepare complex query.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                            OLTP
                                                        </th>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Recommended and best suited for OLTP systems.
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Less likely to be considered for OLTP system.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                            Support
                                                        </th>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Great support.
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Community dependent, they are expanding the support model.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                            Integrated Caching
                                                        </th>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Support In-line memory
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Support integrated caching.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                            Flexible
                                                        </th>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Rigid schema bound relationship.
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Non-rigid schema and flexible.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                            Transaction
                                                        </th>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            ACID
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            CAP theorem
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                            Auto Elasticity
                                                        </th>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Requires downtime in most cases.
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Automatic, no outage required.
                                                        </td>
                                                    </tr>
                                                </tbody>

                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="collapse rounded">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
                            <h2 className='font-bold'>WHAT IS JWT? HOW DOES IT WORK?</h2>
                        </div>
                        <div className="collapse-content bg-primary peer-checked:bg-accent">
                            <p className='text-bold text-lg text-justify text-slate-200 p-4'>JWT means Json Web Token. <br />
                                In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be given. Since tokens are credentials, great care must be taken to prevent security issues. By using token or verify token, user can interaction in application.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Second Table Start*/}
                <div>
                    <div className="collapse rounded">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
                            <h2 className='font-bold'>WHAT DIFFERENCE BETWEEN JAVASCRIPT AND NODE.JS?</h2>
                        </div>

                        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-accent peer-checked:text-secondary-content">
                            <div className="py-1 bg-blueGray-50">
                                <div className="w-full mx-auto mt-10">
                                    <div className="relative flex flex-col break-words bg-white w-full mb-6 shadow-lg rounded ">
                                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                                            <div className="flex flex-wrap items-center">
                                                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                                    <h3 className="font-bold text-base text-center text-blueGray-700">DIFFERENCE BETWEEN JAVASCRIPT AND NODE.JS</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="block w-full overflow-x-auto">
                                            <table className="items-center bg-transparent w-full border-collapse ">
                                                <thead>
                                                    <tr>
                                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                                                            DIFFERENCE
                                                        </th>
                                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                                                            JAVASCRIPT
                                                        </th>
                                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                                                            NODEJS
                                                        </th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                                            Function
                                                        </th>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                            JavaScript is a computer language that is used to write the website scripts.
                                                        </td>
                                                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Nodejs is a JavaScript runtime environment.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                            Works On
                                                        </th>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            JavaScripts runs only in the browsers.
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            With Nodejs help, we can run JavaScript outside of the browser.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                            Stack
                                                        </th>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            It is used on the client-side normally.
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            It is used on the server-side mostly.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                            MarkUp Capability
                                                        </th>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            JavaScript has the ability to add HTML and playing with DOM.
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Nodejs is not capable to add HTML.
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Second Table End */}
                <div>
                    <div className="collapse rounded">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
                            <h2 className='font-bold'>HOW DOES NODEJS HANDLE MULTIPLE REQUESTS AT THE SAME TIME?</h2>
                        </div>
                        <div className="collapse-content bg-primary peer-checked:bg-accent">
                            <p className='text-bold text-lg text-justify text-slate-200 p-4'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. That's how NodeJS handle multiple requests at the same time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;