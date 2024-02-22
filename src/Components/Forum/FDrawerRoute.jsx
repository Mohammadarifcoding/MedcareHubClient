import React, { useState } from 'react';
import UseAuth from '../../Hook/UseAuth.tsx';
import Drawer from 'react-modern-drawer';
import { Link } from 'react-router-dom';

const FDrawerRoute = () => {
    const [isUser, setIsUserOpen] = useState(false);
    const { user } = UseAuth();
    // console.log(user);
    const fullName = user?.displayName;
    const nameParts = fullName?.split(' ');
    const firstName = nameParts[0];
    // const lastName = nameParts.slice(1).join(" ");

    const toggleDrawer = () => {
        setIsUserOpen((prevState) => !prevState);
    };
    return (
        <>
            <div onClick={toggleDrawer}>
                <div tabIndex={0} role="button" className=" p-2 btn btn-ghost rounded-xl ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
            </div>
            <Drawer open={isUser} onClose={toggleDrawer} direction="right" className="bla bla bla">
                <ul tabIndex={0} className=" p-4 text-xl font-semibold text-[#0360D9]  w-52">
                    {/* Home */}
                    <li>
                        <Link to="/" className="block py-2 px-4 hover:text-[#0360D9]">
                            Home
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <div className="relative group">
                            <img className="w-[40px] h-[40px] bg-slate-500 object-cover rounded-full" src={user?.photoURL} alt="" />
                            <span className="h-2 w-2 bg-green-500 absolute rounded-full bottom-2 right-0 border border-white"></span>
                            <span className="h-2 w-2 bg-green-500 absolute rounded-full bottom-2 right-0 animate-ping"></span>
                        </div>
                        <div className="px-2 text-[#5c5b5b]">
                            <p>Hi,{firstName ? firstName : 'User'}</p>
                        </div>
                    </li>
                </ul>
            </Drawer>
        </>
    );
};

export default FDrawerRoute;
