import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaArrowRight, FaHome, FaUserCircle, FaUserFriends } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import UseAuth from '../../../Hook/UseAuth.tsx';
<<<<<<< HEAD
import Drawer from 'react-modern-drawer'
import { FaFilePrescription } from "react-icons/fa";

=======
import Drawer from 'react-modern-drawer';
>>>>>>> 5a7a16edd2fc3914bb1445a9ba2653d60be89ab0
import { PiDotsNineBold } from "react-icons/pi";

const DashboardLayout = () => {
    const [openLayout, setOpenLayout] = useState(true);
    const { user } = UseAuth();
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    }

    return (
        <div className='flex h-full relative'>
            {/* Sidebar */}
            <div className={` ${openLayout ? 'xl:w-[20%]' : 'xl:w-[5%]'} fixed h-full overflow-y-auto bg-[#0360D9] w-[0%] text-[#FFF] transition-all duration-300 `}>
                <div className={`${openLayout ? 'flex' : 'hidden'} gap-5 border-b border-white py-4 justify-around xl:text-xl 2xl:text-2xl`}>
                    <h2 className='font-semibold'>MedCareHub</h2>
                    <div className='p-1 border border-white rounded-full group-hover:p-3 transition-all duration-200 group cursor-pointer'>
                        <MdOutlineNotificationsActive className='group-hover:scale-110  transition-all duration-200'></MdOutlineNotificationsActive>
                    </div>
                </div>
                <div className='p-4 flex gap-2 justify-center my-auto flex-col xl:text-lg 2xl:text-xl'>

<<<<<<< HEAD
                        <NavLink to='/' className=' flex gap-1 items-center    hover:scale-105 overflow-hidden hover:bg-[#2c7feb] p-2 rounded-2xl transition-all duration-200'>
                            <FaHome className=''></FaHome>  Home
                        </NavLink>
                        <NavLink to='/dashboard/profile' className=' flex gap-1 items-center    hover:scale-105 overflow-hidden hover:bg-[#2c7feb] p-2 rounded-2xl transition-all duration-200'>
                            <FaUserCircle />  Profile
                        </NavLink>
                        <NavLink to='/dashboard/docstatus' className=' flex gap-1 items-center   
                         hover:scale-105 overflow-hidden hover:bg-[#2c7feb] p-2 rounded-2xl transition-all duration-200'>
                            <FaFilePrescription />  Doctor status
                        </NavLink>


                    </> : <>
                        <NavLink to='/' className=' flex justify-center   hover:scale-105 overflow-hidden hover:bg-[#2c7feb] px-2 py-3 rounded-2xl transition-all duration-200'>
                            <FaHome ></FaHome>
                        </NavLink>
                        <NavLink to='/dashboard/profile' className=' flex  justify-center   hover:scale-105 overflow-hidden hover:bg-[#2c7feb] px-2 py-3 rounded-2xl transition-all duration-200'>
                            <FaUserCircle />
                        </NavLink>
                    </>}
=======
                    {openLayout ? (
                        <>
                            <NavLink to='/' className=' flex gap-1 items-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] p-2 rounded-2xl transition-all duration-200'>
                                <FaHome className=''></FaHome>  Home
                            </NavLink>
                            <NavLink to='/dashboard/profile' className=' flex gap-1 items-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] p-2 rounded-2xl transition-all duration-200'>
                                <FaUserCircle />  Profile
                            </NavLink>
                            <NavLink to='/dashboard/comproduct' className=' flex gap-1 items-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] p-2 rounded-2xl transition-all duration-200'>
                                <FaUserCircle /> Company Product
                            </NavLink>
                            <NavLink to='/dashboard/alluser' className=' flex gap-1 items-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] p-2 rounded-2xl transition-all duration-200'>
                                <FaUserFriends />  All User
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to='/' className=' flex justify-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] px-2 py-3 rounded-2xl transition-all duration-200'>
                                <FaHome ></FaHome>
                            </NavLink>
                            <NavLink to='/dashboard/profile' className=' flex justify-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] px-2 py-3 rounded-2xl transition-all duration-200'>
                                <FaUserCircle />
                            </NavLink>
                            <NavLink to='/dashboard/comproduct' className=' flex justify-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] px-2 py-3 rounded-2xl transition-all duration-200'>
                                <FaUserCircle />
                            </NavLink>
                            <NavLink to='/dashboard/alluser' className=' flex justify-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] px-2 py-3 rounded-2xl transition-all duration-200'>
                                <FaUserFriends />
                            </NavLink>
                        </>
                    )}
>>>>>>> 5a7a16edd2fc3914bb1445a9ba2653d60be89ab0
                    <div onClick={() => { setOpenLayout(!openLayout) }} className={`absolute top-[50%] p-2 border rounded-full hover:scale-110 cursor-pointer transition-all duration-200 hover:right-3 right-1 `}>
                        {openLayout ? <FaArrowLeft /> : <FaArrowRight></FaArrowRight>}
                    </div>

                </div>
            </div>

            {/* Main Content */}
            <div className={`${openLayout ? 'xl:w-[80%]' : 'xl:w-[95%]'}  ml-auto h-full min-h-screen w-full bg-[#E1EEFF] text-[#021526] transition-all duration-300`}>
                <div className='p-4'>
                    <div className='flex gap-5 items-center lg:hidden '>
                        <button className='text-3xl text-[#0360D9]' onClick={toggleDrawer}><PiDotsNineBold /></button>
                        <Drawer
                            open={isOpen}
                            onClose={toggleDrawer}
                            direction='left'
                            className='bla bla bla '
                        >
                            <div className='mx-5 mt-10 '>
                                <div className='flex items-center gap-6 text-xl font-semibold text-[#0360D9]'>
                                    <h1>MedCareHub</h1>
                                    <p><MdOutlineNotificationsActive></MdOutlineNotificationsActive></p>
                                </div>
                                <hr className='my-5 h-[2px]' />
                                <div className='flex items-center gap-6 text-xl font-semibold text-[#0360D9]'>
                                    <p> <FaHome /></p>
                                    <NavLink to='/'>Home</NavLink>
                                </div>
                                <div className='flex items-center gap-6 text-xl font-semibold my-2 text-[#0360D9]'>
                                    <p><FaUserCircle /></p>
                                    <NavLink to='/dashboard/profile'>Profile</NavLink>
                                </div>
                                <div className='flex items-center gap-6 text-xl font-semibold my-2 text-[#0360D9]'>
<<<<<<< HEAD
                                <p><FaFilePrescription /></p>
                                    <NavLink to='/dashboard/docstatus'>Doctor Status</NavLink>
                                </div>

=======
                                    <p><FaUserFriends /> </p>
                                    <p><FaUserFriends/> </p>
                                    <NavLink to='/dashboard/alluser'>All User</NavLink>
                                    <p><FaUserCircle /></p>
                                    <NavLink to='/dashboard/comproduct'>Company Product</NavLink>
                                </div>
>>>>>>> 5a7a16edd2fc3914bb1445a9ba2653d60be89ab0
                            </div>
                        </Drawer>
                        <h1 className='text-xl font-semibold text-[#0360D9]'>Dashboard</h1>
                    </div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>


    );
};

export default DashboardLayout;
