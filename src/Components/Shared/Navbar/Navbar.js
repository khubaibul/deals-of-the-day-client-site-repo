import React, { useContext } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../Assets/Logo/deals_of_the_day_logo.png";
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navLink = <>
        <li className='hover:bg-yellow-500'><NavLink to="/">HOME</NavLink></li>
        <li className='hover:bg-yellow-500'><NavLink to="/all-products">PRODUCTS</NavLink></li>
        <li className='hover:bg-yellow-500'><NavLink to="/dashboard">DASHBOARD</NavLink></li>
        <li className='hover:bg-yellow-500'><NavLink to="/about-us">ABOUT US</NavLink></li>
        {
            user?.uid ?
                <>
                    <li className='hover:bg-yellow-500'><NavLink to="/user-profile">USER</NavLink></li>
                    <button onClick={logOut}><li className='hover:bg-yellow-500'><Link>LOG OUT</Link></li></button>
                </>
                :
                <>
                    <li className='hover:bg-yellow-500'><NavLink to="/login">LOGIN</NavLink></li>
                    <li className='hover:bg-yellow-500'><NavLink to="/sign-up">SIGNUP</NavLink></li>
                </>
        }
    </>
    return (
        <div className="navbar bg-[#183661] lg:px-36 text-white py-6">
            <div className="navbar-start p-0">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#183661] w-52">
                        {navLink}
                        <div className='flex items-center gap-x-2'>
                            <button className='btn btn-sm bg-blue-900 hover:bg-yellow-500'>Order Now</button>
                            <button><FaShoppingBag /></button>
                        </div>
                    </ul>
                </div>
                <Link to="/">
                    <img src={logo} className="w-32" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end hidden lg:block">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered rounded-none text-black" />
                </div>
            </div>
            <div className="navbar-end lg:hidden">
                <div className="form-control">
                    <p className='text-lg font-bold text-yellow-500'>DEAL OF THE DAY</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;