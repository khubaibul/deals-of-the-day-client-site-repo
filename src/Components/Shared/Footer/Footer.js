import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../Assets/Logo/deals_of_the_day_logo.png";
import paypal from "../../../Assets/Images/paypal.png";
import visa from "../../../Assets/Images/visa.png";
import masterCard from "../../../Assets/Images/mastercard.png";
import americanExpress from "../../../Assets/Images/american-express.png";
import discover from "../../../Assets/Images/discover.png";
import ssl from "../../../Assets/Images/ssl-certificate.png";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-slate-50 flex flex-col mt-10">
            <div className='grid lg:grid-cols-4 w-full md:grid-cols-2 sm:grid-cols-2 grid-cols-1 mx-auto'>
                <div className='text-neutral flex flex-col gap-y-2'>
                    <div>
                        <div className='flex items-center gap-x-2 text-3xl font-bold'>
                            <img src={logo} className="w-14" alt="" />
                            <h3>Deals Of The Day</h3>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-2 text-xl'>
                        <i className="fa-sharp fa-solid fa-house-user text-neutral"></i>
                        <h4>32. Mymensingh - 2200, Bangladesh</h4>
                    </div>
                    <div className='flex items-center gap-x-2 text-xl'>
                        <i className="fa-solid fa-phone-volume text-neutral"></i>
                        <h4>+8801832302170</h4>
                    </div>
                    <div className='flex items-center gap-x-2 text-xl'>
                        <i className="fa-solid fa-envelope text-neutral"></i>
                        <h4>dealsOfTheDay@mail.com</h4>
                    </div>
                </div>
                <div className='text-neutral mt-4'>
                    <div className='flex items-center gap-x-2 text-3xl font-bold'>
                        <h3>Important Links</h3>
                    </div>
                    <div className='flex flex-col gap-y-2 mt-4'>
                        <Link to="/about-us" className="link link-hover text-xl font-bold">About Us</Link>
                        <Link className="link link-hover text-xl font-bold">Contact</Link>
                        <Link to="/sign-up" className="link link-hover text-xl font-bold">Be A Seller</Link>
                    </div>
                </div>
                <div className='text-neutral mt-4'>
                    <div className='flex items-center gap-x-2 text-3xl font-bold'>
                        <h3>Store Departments</h3>
                    </div>
                    <div className='flex flex-col gap-y-2 mt-4'>
                        <h4 className="text-xl font-bold">Computer And Accessories</h4>
                        <h4 className="text-xl font-bold">Smartphone and Tablets</h4>
                        <h4 className="text-xl font-bold">TV Audio & Video</h4>
                        <h4 className="text-xl font-bold">Cameras Drone & Gimbal</h4>
                    </div>
                </div>
                <div className='mt-4'>
                    <h3 className=' text-3xl font-bold'>Download App</h3>
                    <div className="flex flex-col gap-4 mt-4">
                        <div className="flex items-center border rounded-lg px-4 py-2 w-52 hover:bg-slate-100">
                            <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8" alt=' ' />
                            <div className="text-left ml-3">
                                <p className='text-xs'>Download on </p>
                                <p className="text-base"> Google Play Store </p>
                            </div>
                        </div>
                        <div className="flex items-center border rounded-lg px-4 py-2 w-52 hover:bg-slate-100">
                            <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8" alt=' ' />
                            <div className="text-left ml-3">
                                <p className='text-xs'>Download on </p>
                                <p className="text-base"> Apple Store </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-[1.5px] opacity-50 bg-gray-400'></div>

            <div className='w-full flex flex-col items-center justify-center'>
                <div className='lg:flex md:flex sm:flex gap-x-4 items-center m-0 p-0'>
                    <div className='flex items-center justify-center gap-4'>
                        <img src={paypal} className="w-28 h-full" alt="" />
                        <img src={visa} className="w-20 h-full" alt="" />
                    </div>
                    <div className='flex items-center justify-center gap-4'>
                        <img src={masterCard} className="w-16 h-full" alt="" />
                        <img src={americanExpress} className="w-20 h-full" alt="" />
                    </div>
                    <div className='flex items-center justify-center gap-4'>
                        <img src={discover} className="w-24 h-full" alt="" />
                        <img src={ssl} className="w-12 h-full" alt="" />
                    </div>
                </div>
                <p className='m-0 p-0'>Copyright © 2023 - All right reserved by <span className='font-bold'>Deals Of The Day</span></p>
            </div>
        </footer>
    );
};

export default Footer;