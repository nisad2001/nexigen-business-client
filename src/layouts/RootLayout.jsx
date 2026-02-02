import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Section/Navbar/Navbar';
import Footer from '../components/Section/Footer/Footer';


const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;