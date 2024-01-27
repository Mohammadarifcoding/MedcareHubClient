
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../../Hook/UseAuth.tsx';
import DrawerRoute from './DrawerRoute.tsx';
import Container from '../Container/Container.tsx';





const Navbar = () => {

    const { user, logoutUser } = UseAuth()

    const handleLogOut = () => {
        logoutUser()
            .then(() => console.log("You logged out successfully"))
            .catch(error => console.error(error))
    }

    return (
        <div>

            <header className="px-2 py-7  bg-[#E1EEFF] ">
                <Container>
                    <div className=" flex items-center justify-between  h-16 ">
                        <div className='flex justify-start items-center'>
                            <DrawerRoute></DrawerRoute>
                            <div className='justify-start flex'>
                                <img className="lg:w-[150px] w-[100px] ml-0 " src='/1.png' alt="" />
                            </div>
                        </div>





                        <ul className=" hidden space-x-3 lg:flex">
                            <Link to={'/'}>
                                <li className="flex">
                                    <p className="flex items-center px-4 -mb-1 text-xl hover:text-[#0360D9] hover:underline ">Home</p>
                                </li>
                            </Link>
                            <Link to={'/'}>
                                <li className="flex">
                                    <p className="flex items-center px-4 -mb-1 text-xl hover:text-[#0360D9] hover:underline ">About Us</p>
                                </li>
                            </Link>
                            <Link to={'/medicines'}>
                                <li className="flex">
                                    <p className="flex items-center px-4 -mb-1 text-xl hover:text-[#0360D9] hover:underline ">Medicines</p>
                                </li>
                            </Link>
                            <Link to={'/doctors'}>
                                <li className="flex">
                                    <p className="flex items-center px-4 -mb-1 text-xl hover:text-[#0360D9] hover:underline ">Doctor's</p>
                                </li>
                            </Link>
                            <Link to={'/contact'}>
                                <li className="flex">
                                    <p className="flex items-center px-4 -mb-1 text-xl hover:text-[#0360D9] hover:underline ">Contact</p>
                                </li>
                            </Link>
                            <Link to={'/forum'}>
                                <li className="flex">
                                    <p className="flex items-center px-4 -mb-1 text-xl hover:text-[#0360D9] hover:underline ">Forum</p>
                                </li>
                            </Link>




                        </ul>
                        <div className=" flex items-end  justify-end gap-5  ">
                            {user ?
                                <>

                                    <div className="dropdown  dropdown-end">

                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img className="rounded-full w-7 lg:w-14" src={user?.photoURL}
                                                    alt="" />
                                            </div>
                                        </div>
                                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                            <li>
                                                <p className="justify-between">
                                                    Profile
                                                </p>
                                            </li>
                                            <Link to={'/dashboard'}>
                                                <li><p>DashBoard</p></li>
                                            </Link>

                                            <li > <p onClick={handleLogOut}>Log Out</p></li>
                                        </ul>
                                    </div>
                                </>
                                :
                                <div className="flex gap-3">
                                    <Link to='/login' className=" rounded-full lg:px-10 p-1 font-semibold lg:text-xl bg-[#E1EEFF] hover:bg-[#0360D9] text-[#0360D9] hover:text-white border-2 border-[#0360D9]">Log in</Link>
                                    <Link to='/register' className=" rounded-full lg:px-10 p-1 font-semibold lg:text-xl bg-[#E1EEFF] hover:bg-[#0360D9] text-[#0360D9] hover:text-white border-2 border-[#0360D9]">Sign up</Link>
                                </div>
                            }

                        </div>

                    </div>
                </Container>



            </header>


        </div>
    );
};

export default Navbar;