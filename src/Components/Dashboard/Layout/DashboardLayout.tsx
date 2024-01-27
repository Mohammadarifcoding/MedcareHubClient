import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaArrowRight, FaHome } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";

const DashboardLayout = () => { 
    const [openLayout, setOpenLayout] = useState(true)
    return (

        <div className='flex h-full relative'>
            {/* Sidebar */}
            <div className={` ${openLayout ? 'xl:w-[20%]' : 'xl:w-[5%]'} fixed h-full  overflow-y-auto bg-[#0360D9] w-[0%] text-[#FFF] transition-all duration-300 `}>
                <div className={`${openLayout ?'flex':'hidden'} gap-5 border-b border-white  py-4  justify-around xl:text-xl 2xl:text-2xl`}>
                    <h2 className='font-semibold'>MedCareHub</h2>
                    <div className='p-1 border border-white rounded-full group-hover:p-3 transition-all duration-200 group cursor-pointer'>
                        <MdOutlineNotificationsActive className='group-hover:scale-110  transition-all duration-200'></MdOutlineNotificationsActive>
                    </div>

                </div>
                <div className='p-4 flex gap-2 justify-center my-auto flex-col xl:text-lg 2xl:text-xl'>
                    {/* BIg layout  */}
                    {openLayout ? <>

                        <NavLink to='/dashboard' className=' flex gap-1 items-center    hover:scale-105 overflow-hidden hover:bg-[#2c7feb] p-2 rounded-2xl transition-all duration-200'>
                            <FaHome className=''></FaHome>  Home
                        </NavLink>
                        <NavLink to='/dashboard' className=' flex gap-1 items-center    hover:scale-105 overflow-hidden hover:bg-[#2c7feb] p-2 rounded-2xl transition-all duration-200'>
                            <FaUserCircle />  Profile
                        </NavLink>


                        
                    </> : <>
                    <NavLink to='/dashboard' className=' flex justify-center   hover:scale-105 overflow-hidden hover:bg-[#2c7feb] px-2 py-3 rounded-2xl transition-all duration-200'>
                            <FaHome ></FaHome> 
                        </NavLink>
                        <NavLink to='/dashboard' className=' flex  justify-center   hover:scale-105 overflow-hidden hover:bg-[#2c7feb] px-2 py-3 rounded-2xl transition-all duration-200'>
                            <FaUserCircle /> 
                        </NavLink>
                    </>}
                    <div onClick={() => { setOpenLayout(!openLayout) }} className={`absolute top-[50%] p-2 border rounded-full hover:scale-110 cursor-pointer transition-all duration-200 hover:right-3 right-1 `}>
                            {openLayout ? <FaArrowLeft /> : <FaArrowRight></FaArrowRight>}
                        </div>
                    {/* Navigation Links */}

                    {/* Add more NavLink components as needed */}
                    {/* small layout */}
                </div>


                <div>

                </div>
            </div>

            {/* Main Content */}
            <div className={`${openLayout ? 'xl:w-[80%]' :'xl:w-[95%]'}  ml-auto h-full min-h-screen w-full bg-[#E1EEFF] text-[#021526] transition-all duration-300`}>
                <div className='p-4'>
                    {/* Add your main content or use Outlet for nested routes */}
                    <Outlet></Outlet>
                </div>
            </div>
        </div>


    );
};

export default DashboardLayout;