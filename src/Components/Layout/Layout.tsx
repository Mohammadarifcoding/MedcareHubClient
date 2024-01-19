import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar.tsx';
import Footer from '../Shared/Footer/Footer.tsx';

const Layout = () => {
    return (
        <div className='overflow-hidden'>
           <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;