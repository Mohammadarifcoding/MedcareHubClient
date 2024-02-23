import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar.tsx';
import Footer from '../Shared/Footer/Footer.tsx';
import { FacebookProvider, CustomChat } from 'react-facebook';
// import MessengerCustomerChat from 'react-messenger-customer-chat';

const Layout = () => {
    return (
        <div className='overflow-hidden'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            {/* <MessengerCustomerChat
                pageId="102843971521105"
                appId="406465978450964"
            /> */}
            <FacebookProvider appId="406465978450964" chatSupport>
                <CustomChat pageId="102843971521105" minimized={true} />
            </FacebookProvider>
        </div>
    );
};

export default Layout;