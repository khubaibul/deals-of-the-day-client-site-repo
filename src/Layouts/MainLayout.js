import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import Navbar from '../Components/Shared/Navbar/Navbar';
import TopNavBar from '../Components/Shared/Navbar/TopNavBar';

const MainLayout = () => {
    return (
        <div>
            <TopNavBar></TopNavBar>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;