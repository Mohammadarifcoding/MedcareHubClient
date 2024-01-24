import React, { useState } from 'react';
import  Drawer  from 'react-modern-drawer';
import { Link } from 'react-router-dom';
import 'react-modern-drawer/dist/index.css'

const DrawerRoute = () => {
    const [isUser, setIsUserOpen] = useState(false)
    const toggleDrawer = () => {
        setIsUserOpen((prevState) => !prevState)
    }
    return (
        <>
                 <div onClick={toggleDrawer} className="lg:hidden block">
                        <div tabIndex={0} role="button" className=" p-2 btn btn-ghost rounded-xl ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>

                    </div>
                    <Drawer
                        open={isUser}
                        onClose={toggleDrawer}
                        direction='right'
                        className='bla bla bla'
                    >
                        <ul tabIndex={0} className=" p-4   w-52">

                            {/* Home */}
                            <li>
                                <Link to='/' className="block py-2 px-4 hover:text-[#0360D9]">Home</Link>
                            </li>


                            <li>
                                <Link to='/about' className="block py-2 px-4 hover:text-[#0360D9]">About Us</Link>
                            </li>

                            <li>
                                <Link to='/medicines' className="block py-2 px-4 hover:text-[#0360D9]">Medicines</Link>
                            </li>


                            <li>
                                <Link to='/contact' className="block py-2 px-4 hover:text-[#0360D9]">Contact</Link>
                            </li>


                            <li>
                                <Link to='/login' className="block py-2 px-4 hover:text-[#0360D9]">Log in</Link>
                            </li>


                            <li>
                                <Link to='/register' className="block py-2 px-4 hover:text-[#0360D9]">Sign up</Link>
                            </li>

                        </ul>
                    </Drawer>
        </>
    );
};

export default DrawerRoute;