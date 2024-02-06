import React, { useState } from 'react';

const RegiModal = () => {

    const [openModal, setOpenModal] = useState(false);
    return (
        <div>
            <div className="w-72 mx-auto flex items-center justify-center">
                {/* Pay Button */}
                <button onClick={() => setOpenModal(true)} className="btn bg-[#0360D9] hover:bg-[#0360D9] text-white">Register As a doctor</button>
                <div className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} duration-300 inset-0 w-full h-full`}>
                    <div onClick={(e_) => e_.stopPropagation()} className={`absolute overflow-x-hidden overflow-y-scroll w-full h-full flex justify-center bg-white drop-shadow-2xl rounded-lg ${openModal ? 'translate-y-0 opacity-1 duration-300' : 'translate-y-32 opacity-0 duration-1000'}`}>
                        <main className="px-4 sm:px-6 lg:px-8 py-8">


                            <div className="space-y-8 lg:mb-6">
                                <div className="rounded-lg border lg:w-[900px] bg-card text-card-foreground shadow-sm">
                                    <div className="flex flex-col space-y-1.5 lg:p-6 p-2">
                                        <h3 className="text-2xl font-semibold whitespace-nowrap text-center">Registration as a Doctor</h3>
                                    </div>
                                    <div className="lg:p-6 p-2">
                                        {/* Shipping Details form */}
                                        <form className="space-y-4">
                                            <div className="space-y-2">

                                                <div className="form-control md:w-full">
                                                    <label className="label">
                                                        <span className="label-text font-bold">Doctor Name</span>
                                                    </label>
                                                    <label className="flex items-center">
                                                        <span className="font-medium bg-[#0360D9] p-3 rounded-l-md text-white w-[110px] text-center">Name</span>
                                                        <input type="text" name="Price" placeholder="Enter Doctor Name" className="input rounded-r-md rounded-l-none w-full" required />
                                                    </label>
                                                </div>


                                            </div>

                                            <div className="space-y-2">
                                                <div className="md:flex gap-6 justify-center mb-8">
                                                    <div className="form-control md:w-1/2">
                                                        <label className="label">
                                                            <span className="label-text font-bold">Doctor Email</span>
                                                        </label>
                                                        <label className="flex items-center">
                                                            <span className="font-medium bg-[#0360D9] p-3 rounded-l-md text-white w-[110px] text-center">Email</span>
                                                            <input type="text" name="Category" placeholder="Enter Doctor Email" className="input rounded-r-md rounded-l-none w-full" required />
                                                        </label>
                                                    </div>

                                                    <div className="form-control md:w-1/2">
                                                        <label className="label">
                                                            <span className="label-text font-bold">Phone Number</span>
                                                        </label>
                                                        <label className="flex items-center">
                                                            <span className="font-medium bg-[#0360D9] p-3 rounded-l-md text-white w-[110px] text-center">Number</span>
                                                            <input type="text" name="Category" placeholder="Enter Doctor Phone Number" className="input rounded-r-md rounded-l-none w-full" required />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="md:flex gap-6 justify-center mb-8">
                                                    <div className="form-control md:w-1/2">
                                                        <label className="label">
                                                            <span className="label-text font-bold">Doctor Age</span>
                                                        </label>
                                                        <label className="flex items-center">
                                                            <span className="font-medium bg-[#0360D9] p-3 rounded-l-md text-white w-[110px] text-center">Age</span>
                                                            <input type="text" name="Category" placeholder="Enter Doctor Age" className="input rounded-r-md rounded-l-none w-full" required />
                                                        </label>
                                                    </div>

                                                    <div className="form-control md:w-1/2">
                                                        <label className="label">
                                                            <span className="label-text font-bold">Gender</span>
                                                        </label>
                                                        <label className="flex items-center">
                                                            <span className="font-medium bg-[#0360D9] p-3 rounded-l-md text-white w-[110px] text-center">Gender</span>
                                                            <input type="text" name="Category" placeholder="Enter Gender" className="input rounded-r-md rounded-l-none w-full" required />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-control md:w-full">
                                                <label className="label">
                                                    <span className="label-text font-bold">Doctor Type</span>
                                                </label>
                                                <label className="flex items-center">
                                                    <span className="font-medium bg-[#0360D9] p-3 rounded-l-md text-white w-[110px] text-center">Type</span>
                                                    <input type="text" name="Price" placeholder="Enter Doctor Type" className="input rounded-r-md rounded-l-none w-full" required />
                                                </label>
                                            </div>


                                            <div className="space-y-2">
                                                <div className="md:flex gap-6 justify-center mb-8">
                                                    <div className="form-control md:w-1/2">
                                                        <label className="label">
                                                            <span className="label-text font-bold">Start Available Time</span>
                                                        </label>
                                                        <label className="flex items-center">
                                                            <span className="font-medium bg-[#0360D9] p-3 w-[110px] text-center rounded-l-md text-white w-[110px] text-center">Start</span>
                                                            <input type="number" name="Price" placeholder="Enter Start Available Time" className="input rounded-r-md rounded-l-none w-full" required />
                                                        </label>
                                                    </div>
                                                    <div className="form-control md:w-1/2">
                                                        <label className="label">
                                                            <span className="label-text font-bold">End Available Time</span>
                                                        </label>
                                                        <label className="flex items-center">
                                                            <span className="font-medium bg-[#0360D9] p-3 rounded-l-md text-white w-[110px] text-center">End</span>
                                                            <input type="number" name="Category" placeholder="Enter End Available Time" className="input rounded-r-md rounded-l-none w-full" required />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-control md:w-full">
                                                <label className="label">
                                                    <span className="label-text font-bold">Doctor Fee</span>
                                                </label>
                                                <label className="flex items-center">
                                                    <span className="font-medium bg-[#0360D9] p-3 w-[110px] text-center rounded-l-md text-white">Fee</span>
                                                    <input type="number" name="Price" placeholder="Enter Doctor Fee" className="input rounded-r-md rounded-l-none w-full" required />
                                                </label>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="md:flex gap-6 justify-center mb-8">
                                                    <div className="form-control md:w-1/2">
                                                        <label className="label">
                                                            <span className="label-text font-bold">Doctor Service</span>
                                                        </label>
                                                        <label className="flex items-center">
                                                            <span className="font-medium bg-[#0360D9] p-3 rounded-l-md text-white w-[110px] text-center">Service</span>
                                                            <input type="text" name="Price" placeholder="Enter Doctor Service" className="input rounded-r-md rounded-l-none w-full" required />
                                                        </label>
                                                    </div>
                                                    <div className="form-control md:w-1/2">
                                                        <label className="label">
                                                            <span className="label-text font-bold">Doctor Specialists</span>
                                                        </label>
                                                        <label className="flex items-center">
                                                            <span className="font-medium bg-[#0360D9] p-3 rounded-l-md text-white w-[110px] text-center">Specialists</span>
                                                            <input type="text" name="Category" placeholder="Enter Doctor Specialists" className="input rounded-r-md rounded-l-none w-full" required />
                                                        </label>
                                                    </div>


                                                </div>
                                                <div className="form-control md:w-full">
                                                    <label className="label">
                                                        <span className="label-text font-bold">Doctor's About</span>
                                                    </label>
                                                    <textarea className="textarea rounded-md  w-full" name="Description" placeholder="Enter Your About" required></textarea>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>

                            </div>
                            <div className='flex justify-between'>
                                <button className="py-2 px-5 mb-4 mt-6 shadow-lg rounded-lg before:block before:-left-1 before:-top-1 before:bg-black before:rounded-lg before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%] before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:rounded-lg after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block" type="submit">Submit</button>
                                <button onClick={() => { setOpenModal(false) }} className="py-2 px-5 mb-4 mt-6 shadow-lg rounded-lg before:block before:-left-1 before:-top-1 before:bg-black before:rounded-lg before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%] before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:rounded-lg after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block" >Close</button>
                            </div>


                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegiModal;