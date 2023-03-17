import React, { useContext } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../Assets/Logo/deals_of_the_day_logo.png";
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const navLinkStyle = ({ isActive }) => {
        return {
            borderBottom: isActive ? "4px solid #EAB308" : "",
            backgroundColor: isActive ? "transparent" : "transparent",
            color: isActive ? "#EAB308" : "",
            borderRadius: "0px"
        }
    }

    const navLink = <>
        <li className=''><NavLink to="/" style={navLinkStyle}>HOME</NavLink></li>
        <li className=''><NavLink to="/all-products" style={navLinkStyle}>PRODUCTS</NavLink></li>
        <li className=''><NavLink to="/about-us" style={navLinkStyle}>ABOUT US</NavLink></li>
        <li className=''><NavLink to="/dashboard" style={navLinkStyle}>DASHBOARD</NavLink></li>
        {
            user?.uid ?
                <>
                    <li className=''>
                        <NavLink to="/user-profile" style={navLinkStyle}>
                            <img src={user?.photoURL} className="w-10 h-10 rounded-full p-0.5 bg-warning" alt="" />
                        </NavLink>
                    </li>
                    <li className='flex lg:items-center'><button onClick={logOut} className="btn btn-outline btn-warning rounded !text-white px-5 border-warning">LOG OUT</button></li>
                </>
                :
                <>
                    <li className=''><NavLink to="/login" style={navLinkStyle}>LOGIN</NavLink></li>
                    <li className=''><NavLink to="/sign-up" style={navLinkStyle}>SIGNUP</NavLink></li>
                </>
        }
    </>
    return (
        <div className="navbar bg-[#183661] lg:px-36 text-white sticky top-0 z-50 shadow">
            <div className="navbar-start p-0">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#183661] w-52 rounded-none">
                        {navLink}
                        <div className='flex items-center gap-x-2'>
                            <button className='btn btn-sm bg-blue-900 hover:bg-yellow-500'>Order Now</button>
                            <button><FaShoppingBag /></button>
                        </div>
                    </ul>
                </div>
                <Link to="/" className=''>
                    <img src={logo} className="w-16" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navLink}
                </ul>
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