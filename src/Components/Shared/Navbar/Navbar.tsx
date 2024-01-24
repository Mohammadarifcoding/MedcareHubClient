
import React from 'react';
import { Link} from 'react-router-dom';
import UseAuth from '../../../Hook/UseAuth.tsx';




const Navbar = () => {

    const {user} = UseAuth()
 

  return (
      <div>

          <header className="px-2 py-7 bg-[#E1EEFF] ">
              <div className="container flex lg:justify-between items-center h-16 mx-auto">

                  <div className="dropdown lg:hidden">
                      <div tabIndex={0} role="button" className=" p-2 btn btn-ghost rounded-xl ">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                      </div>
                      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                          <Link to='/' className="hover:text-[#0360D9]">Home</Link>
                          <Link className="hover:text-[#0360D9]">About Us</Link>
                          <Link className="hover:text-[#0360D9]">Application</Link>
                          <Link to={'/contact'} className="hover:text-[#0360D9]">Contact</Link>
                          <Link to='/login' className="hover:text-[#0360D9]">Log in</Link>
                          <Link to='/register' className="hover:text-[#0360D9]">Sign up</Link>





                      </ul>
                  </div>


                  <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                      <img className="lg:w-[200px] w-[190px] " src='/1.png' alt="" />
                  </a>


                  <ul className="items-stretch hidden space-x-3 lg:flex">
                  <Link to={'/'}>
                      <li className="flex">
                          <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 text-xl hover:text-[#0360D9] hover:underline ">Home</a>
                      </li>
                      </Link>
                      <Link to={'/'}>
                      <li className="flex">
                          <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 text-xl hover:text-[#0360D9] hover:underline ">About Us</a>
                      </li>
                      </Link>
                      <Link to={'/doctors'}>
                      <li className="flex">
                          <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 text-xl hover:text-[#0360D9] hover:underline ">Doctor's</a>
                      </li>
                      </Link>
                      <Link to={'/contact'}>
                      <li className="flex">
                          <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 text-xl hover:text-[#0360D9] hover:underline ">Contact</a>
                      </li>
                      </Link>
                      



                  </ul>
                  <div className="items-center gap-5 flex-shrink-0 lg:flex">
                      {user ?
                          <>

                              <div className="dropdown dropdown-end">

                                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                      <div className="w-10 rounded-full">
                                          <img className="rounded-full w-7 lg:w-14" src={user.photoURL}
                                              alt="" />
                                      </div>
                                  </div>
                                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                      <li>
                                          <a className="justify-between">
                                              Profile
                                          </a>
                                      </li>
                                      <li><a>DashBoard</a></li>
                                      <li > <a>Log Out</a></li>
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


          </header>


      </div>
  );
};

export default Navbar;