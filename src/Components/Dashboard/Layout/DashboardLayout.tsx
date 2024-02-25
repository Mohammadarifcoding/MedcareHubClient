import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaBook, FaFilePrescription, FaHome, FaHospitalUser, FaUserCircle, FaUserFriends } from 'react-icons/fa';
import { ImBlog } from 'react-icons/im';
import { MdOutlineAddToPhotos, MdOutlineNotificationsActive } from 'react-icons/md';
import { PiDotsNineBold } from 'react-icons/pi';
import Drawer from 'react-modern-drawer';
import { NavLink, Outlet } from 'react-router-dom';
import UseAuth from '../../../Hook/UseAuth.tsx';
import { MdOutlineSick } from 'react-icons/md';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import UseAdmin from '../../../Hook/UseAdmin.tsx';
import { LuFileStack } from 'react-icons/lu';
import { GiMedicines } from "react-icons/gi";
import { FaHouseMedical } from "react-icons/fa6";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { FaHandHoldingMedical } from "react-icons/fa";
import { GiRemedy } from "react-icons/gi";
import { MdOutlineForum, MdProductionQuantityLimits } from "react-icons/md";
import UseCheckUser from './../../../Hook/UseCheckUser.tsx';


const DashboardLayout = () => {
    const [openLayout, setOpenLayout] = useState(true);
    const [checkUser, isloading] = UseCheckUser()
    const { user } = UseAuth();
    const [isAdmin] = UseAdmin()
    const [isOpen, setIsOpen] = React.useState(false);
    // const [isAdmin] = 'true';

    console.log(checkUser)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div className="flex h-full relative">
            {/* Sidebar */}
            <div className={` ${openLayout ? 'xl:w-[20%]' : 'xl:w-[6%]'}  fixed h-full overflow-y-auto bg-[#0360D9] w-[0%] text-[#FFF] transition-all duration-300 `}>
                <div className={`${openLayout ? 'flex' : 'hidden'} gap-5 border-b border-white py-4 justify-around xl:text-xl 2xl:text-2xl`}>
                    <h2 className="font-semibold">MedCareHub</h2>
                    <div className="p-1 border border-white rounded-full group-hover:p-3 transition-all duration-200 group cursor-pointer">
                        <MdOutlineNotificationsActive className="group-hover:scale-110  transition-all duration-200"></MdOutlineNotificationsActive>
                    </div>
                </div>
                <div className="p-4 flex gap-2 justify-center my-auto flex-col xl:text-lg 2xl:text-xl">
                    {openLayout ? (

                        <>
                            {
                                checkUser === 'Company' && <>
                                    {/* <NavLink
                                to="/dashboard/comproduct"
                                className=" flex gap-1 items-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] p-2 rounded-2xl transition-all duration-200"
                            >
                                <FaUserCircle /> Company Product
                            </NavLink> */}
                                    <NavLink
                                        to="/dashboard/addproduct"
                                        className=" flex gap-1 items-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] p-2 rounded-2xl transition-all duration-200"
                                    >
                                        <MdOutlineAddToPhotos /> Add Medicine
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/myproduct"
                                        className=" flex gap-1 items-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] p-2 rounded-2xl transition-all duration-200"
                                    >
                                        <GiMedicines /> My Medicine
                                    </NavLink>
                                    <NavLink to="/dashboard/comde" className=" flex gap-1 items-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] p-2 rounded-2xl transition-all duration-200">
                                        <HiOutlineBuildingOffice2 /> Company Dashborad
                                    </NavLink>
                                </>
                            }
                            {
                                checkUser === 'user' && <>
                                    <NavLink
                                        to="/dashboard/addpatient"
                                        className=" flex gap-1 items-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] p-2 rounded-2xl transition-all duration-200"
                                    >
                                        <FaHospitalUser /> Patient Register
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/comregister"
                                        className=" flex gap-1 items-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] p-2 rounded-2xl transition-all duration-200"
                                    >
                                        <FaBriefcaseMedical /> Company Register
                                    </NavLink>
                                </>
                            }
                            {
                                checkUser === 'Admin' && <>
                                    <NavLink to="/dashboard/docque" className=" flex gap-1 items-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] p-2 rounded-2xl transition-all duration-200">
                                        <FaHandHoldingMedical /> Doctor Que
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/alluser"
                                        className=" flex gap-1 items-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] p-2 rounded-2xl transition-all duration-200"
                                    >
                                        <FaUserFriends /> All User
                                    </NavLink>
                                    <NavLink to="/dashboard/allmedicine" className=" flex gap-1 items-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] p-2 rounded-2xl transition-all duration-200">
                                        <GiRemedy /> All Medicine
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/companys"
                                        className=" flex gap-1 items-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] p-2 rounded-2xl transition-all duration-200"
                                    >
                                        <FaHouseMedical /> All Company
                                    </NavLink>
                                    <NavLink to="/dashboard/allblog" className=" flex gap-1 items-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] p-2 rounded-2xl transition-all duration-200">
                                        <GiRemedy /> All Blog
                                    </NavLink>
                                </>
                            }
                            {
                                checkUser === 'Doctor' && <>
                                    <NavLink
                                        to="/dashboard/docstatus"
                                        className=" flex gap-1 items-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] p-2 rounded-2xl transition-all duration-200"
                                    >
                                        <FaFilePrescription /> Doctor Status
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/dochistory"
                                        className=" flex gap-1 items-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] p-2 rounded-2xl transition-all duration-200"
                                    >
                                        <FaFilePrescription /> Doctor History
                                    </NavLink>

                                    <NavLink
                                        to="/dashboard/allpateint"
                                        className=" flex gap-1 items-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] p-2 rounded-2xl transition-all duration-200"
                                    >
                                        <MdOutlineSick /> All Patients
                                    </NavLink>

                                </>
                            }
                            {
                                checkUser === 'Patient' && <>
                                    <NavLink to="/dashboard/doctorvisiting" className=" flex gap-1 items-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] p-2 rounded-2xl transition-all duration-200">
                                        <LuFileStack /> Doctor visiting
                                    </NavLink>
                                </>
                            }
                            <NavLink to="/" className=" flex gap-1 items-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] p-2 rounded-2xl transition-all duration-200">
                                <FaHome className=""></FaHome> Home
                            </NavLink>
                            <NavLink
                                to="/dashboard/profile"
                                className=" flex gap-1 items-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] p-2 rounded-2xl transition-all duration-200"
                            >
                                <FaUserCircle /> Profile
                            </NavLink>




                            <NavLink to="/dashboard/myblog" className=" flex gap-1 items-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] p-2 rounded-2xl transition-all duration-200">
                                <ImBlog /> My blog
                            </NavLink>






                            <NavLink to="/dashboard/orders" className=" flex gap-1 items-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] p-2 rounded-2xl transition-all duration-200">
                                <LuFileStack /> Orders
                            </NavLink>



                            <NavLink to="/dashboard/myorder" className=" flex gap-1 items-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] p-2 rounded-2xl transition-all duration-200">
                                <MdProductionQuantityLimits /> My Order
                            </NavLink>
                            <NavLink to="/dashboard/forum" className=" flex gap-1 items-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] p-2 rounded-2xl transition-all duration-200">
                                <MdOutlineForum /> Forum
                            </NavLink>
                        </>

                    ) : (

                        <>
                            <NavLink to="/" className=" flex justify-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] px-2 py-3 rounded-2xl transition-all duration-200">
                                <FaHome></FaHome>
                            </NavLink>
                            <NavLink
                                to="/dashboard/profile"
                                className=" flex justify-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] px-2 py-3 rounded-2xl transition-all duration-200"
                            >
                                <FaUserCircle />
                            </NavLink>
                            <NavLink
                                to="/dashboard/comproduct"
                                className=" flex justify-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] px-2 py-3 rounded-2xl transition-all duration-200"
                            >
                                <FaUserCircle />
                            </NavLink>

                            <NavLink
                                to="/dashboard/docstatus"
                                className=" flex justify-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] px-2 py-3 rounded-2xl transition-all duration-200"
                            >
                                <FaHandHoldingMedical />
                            </NavLink>
                            <NavLink
                                to="/dashboard/myblog"
                                className=" flex justify-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] px-2 py-3 rounded-2xl transition-all duration-200"
                            >
                                <ImBlog />
                            </NavLink>
                            <NavLink
                                to="/dashboard/alluser"
                                className=" flex justify-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] px-2 py-3 rounded-2xl transition-all duration-200"
                            >
                                <FaUserFriends />
                            </NavLink>
                            <NavLink
                                to="/dashboard/docstatus"
                                className=" flex justify-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] px-2 py-3 rounded-2xl transition-all duration-200"
                            >
                                <FaFilePrescription className="mx-auto" />
                            </NavLink>
                            <NavLink
                                to="/dashboard/addproduct"
                                className=" flex justify-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] px-2 py-3 rounded-2xl transition-all duration-200"
                            >
                                <MdOutlineAddToPhotos />
                            </NavLink>
                            <NavLink
                                to="/dashboard/myproduct"
                                className=" flex justify-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] px-2 py-3 rounded-2xl transition-all duration-200"
                            >
                                <GiMedicines />
                            </NavLink>
                            <NavLink
                                to="/dashboard/addpatient"
                                className=" flex justify-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] px-2 py-3 rounded-2xl transition-all duration-200"
                            >
                                <FaHospitalUser />
                            </NavLink>
                            <NavLink
                                to="/dashboard/comregister"
                                className=" flex justify-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] px-2 py-3 rounded-2xl transition-all duration-200"
                            >
                                <FaBriefcaseMedical />
                            </NavLink>
                            <NavLink
                                to="/dashboard/allpateint"
                                className=" flex justify-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] px-2 py-3 rounded-2xl transition-all duration-200"
                            >
                                <MdOutlineSick />
                            </NavLink>
                            <NavLink
                                to="/dashboard/companys"
                                className=" flex justify-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] px-2 py-3 rounded-2xl transition-all duration-200"
                            >
                                <FaHouseMedical />
                            </NavLink>
                            <NavLink
                                to="/dashboard/comde"
                                className=" flex justify-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] px-2 py-3 rounded-2xl transition-all duration-200"
                            >
                                <MdOutlineSick />
                            </NavLink>
                            <NavLink
                                to="/dashboard/orders"
                                className=" flex justify-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] px-2 py-3 rounded-2xl transition-all duration-200"
                            >
                                <LuFileStack />
                            </NavLink>
                            <NavLink
                                to="/dashboard/doctorvisiting"
                                className=" flex justify-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] px-2 py-3 rounded-2xl transition-all duration-200"
                            >
                                <LuFileStack />
                            </NavLink>
                            <NavLink
                                to="/dashboard/allmedicine"
                                className=" flex justify-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] px-2 py-3 rounded-2xl transition-all duration-200"
                            >
                                <GiRemedy />
                            </NavLink>
                            <NavLink
                                to="/dashboard/allblog"
                                className=" flex justify-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] px-2 py-3 rounded-2xl transition-all duration-200"
                            >
                                <GiRemedy />
                            </NavLink>
                            <NavLink
                                to="/dashboard/myorder"
                                className=" flex justify-center hover:scale-105 overflow-hidden hover:bg-[#2c7feb] px-2 py-3 rounded-2xl transition-all duration-200"
                            >
                                <MdProductionQuantityLimits />
                            </NavLink>
                        </>


                    )}

                    <div
                        onClick={() => {
                            setOpenLayout(!openLayout);
                        }}
                        className={`absolute top-[50%] p-2 border rounded-full hover:scale-110 cursor-pointer transition-all duration-200 hover:right-3 right-1 `}
                    >
                        {openLayout ? <FaArrowLeft /> : <FaArrowRight></FaArrowRight>}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className={`${openLayout ? 'xl:w-[80%]' : 'xl:w-[95%]'}  ml-auto h-full min-h-screen w-full bg-[#E1EEFF] text-[#021526] transition-all duration-300`}>
                <div className="p-1 md:p-4">
                    <div className="flex gap-5 items-center lg:hidden ">
                        <button className="text-3xl text-[#0360D9]" onClick={toggleDrawer}>
                            <PiDotsNineBold />
                        </button>
                        <Drawer open={isOpen} onClose={toggleDrawer} direction="left" className="bla bla bla ">
                            <div className="mx-5 mt-10 ">
                                <div className="flex items-center gap-6 text-xl font-semibold text-[#0360D9]">
                                    <h1>MedCareHub</h1>
                                    <p>
                                        <MdOutlineNotificationsActive></MdOutlineNotificationsActive>
                                    </p>
                                </div>
                                <hr className="my-5 h-[2px]" />
                                <div className="flex items-center gap-6 text-lg font-semibold text-[#0360D9]">
                                    <p>
                                        <FaHome />
                                    </p>
                                    <NavLink to="/">Home</NavLink>
                                </div>
                                <div className="flex items-center gap-6 text-lg font-semibold my-2 text-[#0360D9]">
                                    <p>
                                        <FaUserCircle />
                                    </p>
                                    <NavLink to="/dashboard/profile">Profile</NavLink>
                                </div>
                                <div className="flex items-center gap-6 text-lg font-semibold my-2 text-[#0360D9]">
                                    <p>
                                        <FaHandHoldingMedical />
                                    </p>
                                    <NavLink to="/dashboard/profile">Doctor Que</NavLink>
                                </div>
                                <div className="flex items-center gap-6 text-lg font-semibold my-2 text-[#0360D9]">
                                    <p>
                                        <FaFilePrescription />
                                    </p>
                                    <NavLink to="/dashboard/docstatus">Doctor Status</NavLink>
                                </div>
                                <div className="flex items-center gap-6 text-lg font-semibold my-2 text-[#0360D9]">
                                    <p>
                                        <FaFilePrescription />
                                    </p>
                                    <NavLink to="/dashboard/dochistory">Doctor History</NavLink>
                                </div>

                                <div className="flex items-center gap-6 text-lg font-semibold my-2 text-[#0360D9]">
                                    <p>
                                        <ImBlog />
                                    </p>
                                    <NavLink to="/dashboard/myblog">My blog</NavLink>
                                </div>
                                <div className="flex items-center gap-6 text-lg font-semibold my-2 text-[#0360D9]">
                                    <p>
                                        <FaUserFriends />
                                    </p>
                                    <NavLink to="/dashboard/alluser">All User</NavLink>
                                </div>
                                <div className="flex items-center gap-6 text-lg font-semibold my-2 text-[#0360D9]">
                                    <p>
                                        <FaUserCircle />
                                    </p>
                                    <NavLink to="/dashboard/comproduct">Company Product</NavLink>
                                </div>
                                <div className="flex items-center gap-6 text-lg font-semibold my-2 text-[#0360D9]">
                                    <p>
                                        <GiMedicines />
                                    </p>
                                    <NavLink to="/dashboard/addproduct">Add Medicine</NavLink>
                                </div>
                                <div className="flex items-center gap-6 text-lg font-semibold my-2 text-[#0360D9]">
                                    <p>
                                        <FaBook />
                                    </p>
                                    <NavLink to="/dashboard/myproduct">My Medicine</NavLink>
                                </div>

                                <div className="flex items-center gap-6 text-lg font-semibold my-2 text-[#0360D9]">
                                    <p>
                                        <MdOutlineSick />
                                    </p>
                                    <NavLink to="/dashboard/allpateint">All Patient</NavLink>
                                </div>
                                <div className="flex items-center gap-6 text-lg font-semibold my-2 text-[#0360D9]">
                                    <p>
                                        <FaHospitalUser />
                                    </p>
                                    <NavLink to="/dashboard/addpatient">Patient Register</NavLink>
                                </div>
                                <div className="flex items-center gap-6 text-lg font-semibold my-2 text-[#0360D9]">
                                    <p>
                                        <FaHandHoldingMedical />
                                    </p>
                                    <NavLink to="/dashboard/comregister">Company Register</NavLink>
                                </div>


                                <div className="flex items-center gap-6 text-lg font-semibold my-2 text-[#0360D9]">
                                    <p>
                                        <FaHouseMedical />
                                    </p>
                                    <NavLink to="/dashboard/comregister">All Company</NavLink>
                                </div>

                                <div className="flex items-center gap-6 text-lg font-semibold my-2 text-[#0360D9]">
                                    <p>
                                        <FaBook />
                                    </p>
                                    <NavLink to="/dashboard/comde">Company Dashboard</NavLink>
                                </div>
                                <div className="flex items-center gap-6 text-lg font-semibold my-2 text-[#0360D9]">
                                    <p>
                                        <GiRemedy />
                                    </p>
                                    <NavLink to="/dashboard/allmedicine">All Medicine</NavLink>
                                </div>
                                <div className="flex items-center gap-6 text-lg font-semibold my-2 text-[#0360D9]">
                                    <p>
                                        <GiRemedy />
                                    </p>
                                    <NavLink to="/dashboard/allblog">All blog</NavLink>
                                </div>
                                <div className="flex items-center gap-6 text-lg font-semibold my-2 text-[#0360D9]">
                                    <p>
                                        <GiRemedy />
                                    </p>
                                    <NavLink to="/dashboard/myorder">My Order</NavLink>
                                </div>
                            </div>
                        </Drawer>
                        <h1 className="text-xl font-semibold text-[#0360D9]">Dashboard</h1>
                    </div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
