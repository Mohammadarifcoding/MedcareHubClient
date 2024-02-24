import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../../Hook/UseAuth.tsx';
import FDrawerRoute from './FDrawerRoute.jsx';

const FNavBar = () => {
    const { user, logoutUser } = UseAuth();
    // console.log(user);
    const fullName = user?.displayName;
    const nameParts = fullName?.split(' ');
    const firstName = nameParts && nameParts.length > 0 ? nameParts[0] : null;
    // const lastName = nameParts.slice(1).join(" ");

    const handleLogOut = () => {
        logoutUser()
            .then(() => console.log('You logged out successfully'))
            .catch((error) => console.error(error));
    };

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
                    {user ? (
                        <>
                            <div className="dropdown  dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img className="w-[40px] h-[40px] bg-slate-500 object-cover rounded-full" src={user?.photoURL} alt="" />
                                        <span className="h-2.5 w-2.5 bg-green-500 absolute rounded-full bottom-2 right-0 border border-white"></span>
                                        <span className="h-2.5 w-2.5 bg-green-500 absolute rounded-full bottom-2 right-0 animate-ping"></span>
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <Link to={'/dashboard/profile'}>
                                        <li>
                                            <p className="justify-between">Profile</p>
                                        </li>
                                    </Link>
                                    <Link to={'/dashboard/profile'}>
                                        <li>
                                            <p>DashBoard</p>
                                        </li>
                                    </Link>

                                    <li>
                                        {' '}
                                        <p onClick={handleLogOut}>Log Out</p>
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) : (
                       <div className="w-10 rounded-full">
                        <img className="rounded-full w-7 lg:w-14" src='https://i.ibb.co/2FngQt8/user.png'
                            alt="" />

                    </div>
                    )}
                </div>
                <div className="px-2 text-[#5c5b5b]">
                    <p>Hi, {firstName ? firstName : 'User'}</p>
                </div>
            </div>
        </div>
    );
};

export default FNavBar;
