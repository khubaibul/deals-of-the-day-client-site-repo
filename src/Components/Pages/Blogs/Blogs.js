import React from 'react';
import useDynamicTitle from '../../../Hooks/useDynamicTitle';

const Blogs = () => {

    useDynamicTitle("Blogs")


    return (
        <div className='bg-yellow-50'>
            <div className='lg:w-4/5 mx-auto w-full flex flex-col gap-y-4 p-24'>
                <div>
                    <div className="collapse rounded">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
                            <h2 className='font-bold uppercase'>React vs. Angular vs. Vue?</h2>
                        </div>

                        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-accent peer-checked:text-secondary-content">
                            <div className="py-1 bg-blueGray-50">
                                <div className="w-full mx-auto mt-10">
                                    <div className="relative flex flex-col break-words bg-white w-full mb-6 shadow-lg rounded ">
                                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                                            <div className="flex flex-wrap items-center">
                                                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                                    <h3 className="font-bold text-base text-center text-blueGray-700">DIFFERENCE BETWEEN REACT & ANGULAR & VUE</h3>
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
                                                            REACT
                                                        </th>
                                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                                                            ANGULAR
                                                        </th>
                                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                                                            VUE
                                                        </th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                                            Framework Size
                                                        </th>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                            97.5k
                                                        </td>
                                                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            143K
                                                        </td>
                                                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            58.8
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                            Programming Language
                                                        </th>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            JavaScript
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            TypeScript
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            JavaScript
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                            UI Component
                                                        </th>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            React UI Tools
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            In-Built Material TechStack
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Component Libraries
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                            Architecture
                                                        </th>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Component Based
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Component Based
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Component Based
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                            Syntax
                                                        </th>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Virtual DOM
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Real DOM
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Virtual DOM
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                            Scalability
                                                        </th>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Component Based Approach
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Modular Development Structure
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Template Based Syntax
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                            Migrations
                                                        </th>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            React Codemod Script
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            API Upgrade
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Migration Helper Tool
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
                            <h2 className='font-bold uppercase'>What are the different ways to manage a state in a React application?</h2>
                        </div>
                        <div className="collapse-content bg-primary peer-checked:bg-accent">
                            <p className='text-bold text-lg text-justify text-slate-200 p-4'>
                                🔰 Local state
                                🔰 Global state
                                🔰 Server state
                                🔰 URL state
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="collapse rounded">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
                            <h2 className='font-bold uppercase'>What is a unit test? Why should we write unit tests?</h2>
                        </div>
                        <div className="collapse-content bg-primary peer-checked:bg-accent">
                            <p className='text-bold text-lg text-justify text-slate-200 p-4'>The main objective of unit testing is to isolate written code to test and determine if it works as intended.Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="collapse rounded">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
                            <h2 className='font-bold uppercase'>How does prototypical inheritance work?</h2>
                        </div>
                        <div className="collapse-content bg-primary peer-checked:bg-accent">
                            <p className='text-bold text-lg text-justify text-slate-200 p-4'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [Prototype] of an object, we use Object.getPrototypeOf and Object.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;