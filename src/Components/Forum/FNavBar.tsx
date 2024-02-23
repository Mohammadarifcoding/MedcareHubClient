import React from 'react';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../Hook/UseAuth.tsx';
import FDrawerRoute from './FDrawerRoute.jsx';

const FNavBar = () => {
    const { user } = UseAuth();
    // console.log(user);
    const fullName = user?.displayName;
    const nameParts = fullName?.split(' ');
    const firstName = nameParts[0];
    // const lastName = nameParts.slice(1).join(" ");

    return (
        <div className="flex justify-between py-3 items-center px-3 md:px-6 md:py-5 bg-base-100">
            <div className="">
                <button
                    className="font-extrabold px-5 text-2xl text-gradient-to-r from-cyan-500 to-blue-500"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #0360D9, #B437E3)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent'
                    }}
                >
                    Help Desk
                </button>
            </div>
            <div className="block md:hidden">
                <FDrawerRoute></FDrawerRoute>
            </div>
            <div className="hidden md:flex justify-end items-center">
                <div className="px-2">
                    <NavLink to={'/'} className="flex items-center px-3 text-lg text-[#757575] hover:text-[#0360D9] hover:underline ">
                        Home
                    </NavLink>
                </div>
                <div className="relative group">
                    <img className="w-[50px] h-[50px] bg-slate-500 object-cover rounded-full" src={user?.photoURL} alt="" />
                    <span className="h-4 w-4 bg-green-500 absolute rounded-full bottom-2 right-0 border-[3px] border-white"></span>
                    <span className="h-4 w-4 bg-green-500 absolute rounded-full bottom-2 right-0 animate-ping"></span>
                </div>
                <div className="px-2 text-[#5c5b5b]">
                    <p>Hi,{firstName ? firstName : 'User'}</p>
                </div>
            </div>
        </div>
    );
};

export default FNavBar;
