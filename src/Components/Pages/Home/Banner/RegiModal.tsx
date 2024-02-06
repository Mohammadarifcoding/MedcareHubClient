
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const RegiModal = () => {

    const [openModal, setOpenModal] = useState(false);
    const {
        register,
        handleSubmit,
    } = useForm()

    const handleRegistered = (data) => {
        console.log(data);
        const formData = {
            ID: data.ID,
            DocName: data.DocName,
            DocType: data.DocType,
            age: data.age,
            startAvail: data.startAvail,
            endAvail: data.endAvail,
            gender: data.gender,
            aboutMe: data.aboutMe,
            Email: data.Email,
            Phone: data.Phone,
            Address: data.Address,
            specialties: data.specialties,
            services: data.services,
            degree: data.degree,
            serviceFee: data.serviceFee
        };
        console.log(formData);
        console.log(formData);
        axios.post(`http://localhost:5000/Blog`, formData)
            .then((res) => {
                console.log(res);
                Swal.fire("You registered for doctor successfully!");
                setOpenModal(false)
              
            })
            .catch((error) => console.error("Error updating status:", error));
    };
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
                                        <form onSubmit={handleSubmit(handleRegistered)} className="space-y-4">
                                            <div className="space-y-2">

                                                <div className="form-control md:w-full">
                                                    <label className="label">
                                                        <span className="label-text font-bold">ID</span>
                                                    </label>


                                                    <input {...register('ID')} type="text" placeholder="Enter ID" className="rounded-lg px-3 h-10 w-full border" required />

                                                </div>

                                                <div className="form-control md:w-full">
                                                    <label className="label">
                                                        <span className="label-text font-bold">Doctor Name</span>
                                                    </label>


                                                    <input {...register('DocName')} type="text" placeholder="Enter Doctor Name" className=" rounded-lg px-3 h-10 w-full border" required />

                                                </div>


                                            </div>

                                            <div className="space-y-2">
                                                <div className="md:flex gap-6 justify-center mb-8">
                                                    <div className="form-control md:w-1/2">
                                                        <label className="label">
                                                            <span className="label-text font-bold">Doctor Email</span>
                                                        </label>


                                                        <input {...register('Email')} type="email" placeholder="Enter Doctor Email" className=" rounded-lg px-3 h-10 w-full border" required />

                                                    </div>

                                                    <div className="form-control md:w-1/2">
                                                        <label className="label">
                                                            <span className="label-text font-bold">Phone Number</span>
                                                        </label>


                                                        <input {...register('Phone')} type="text" placeholder="Enter Phone Number" className=" rounded-lg px-3 h-10 w-full border" required />

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-control md:w-full">
                                                <label className="label">
                                                    <span className="label-text font-bold">Education</span>
                                                </label>


                                                <input {...register('degree')} type="text" placeholder="Enter Doctor Fee" className=" rounded-lg px-3 h-10 w-full border" required />

                                            </div>
                                            <div className="form-control md:w-full">
                                                <label className="label">
                                                    <span className="label-text font-bold">Address</span>
                                                </label>
                                                <input {...register('Address')} type="text" className=" rounded-lg px-3 h-10 w-full border" name="Description" placeholder="Enter Your Address" required></input>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="md:flex gap-6 justify-center mb-8">
                                                    <div className="form-control md:w-1/2">
                                                        <label className="label">
                                                            <span className="label-text font-bold">Doctor Age</span>
                                                        </label>


                                                        <input {...register('age')} type="text" placeholder="Enter Doctor Age" className=" rounded-lg px-3 h-10 w-full border" required />

                                                    </div>

                                                    <div className="form-control md:w-1/2">
                                                        <label className="label">
                                                            <span className="label-text font-bold">Gender</span>
                                                        </label>


                                                        <input {...register('gender')} type="text" placeholder="Enter Gender" className=" rounded-lg px-3 h-10 w-full border" required />

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-control md:w-full">
                                                <label className="label">
                                                    <span className="label-text font-bold">Doctor Type</span>
                                                </label>


                                                <input {...register('DocType')} type="text" placeholder="Enter Doctor Type" className=" rounded-lg px-3 h-10 w-full border" required />

                                            </div>


                                            <div className="space-y-2">
                                                <div className="md:flex gap-6 justify-center mb-8">
                                                    <div className="form-control md:w-1/2">
                                                        <label className="label">
                                                            <span className="label-text font-bold">Start Available Time</span>
                                                        </label>


                                                        <input {...register('startAvail')} type="number" placeholder="Enter Start Available Time" className=" rounded-lg px-3 h-10 w-full border" required />

                                                    </div>
                                                    <div className="form-control md:w-1/2">
                                                        <label className="label">
                                                            <span className="label-text font-bold">End Available Time</span>
                                                        </label>


                                                        <input {...register('endAvail')} type="number" placeholder="Enter End Available Time" className=" rounded-lg px-3 h-10 w-full border" required />

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-control md:w-full">
                                                <label className="label">
                                                    <span className="label-text font-bold">Doctor Fee</span>
                                                </label>


                                                <input {...register('serviceFee')} type="number" placeholder="Enter Doctor Fee" className=" rounded-lg px-3 h-10 w-full border" required />

                                            </div>
                                            <div className="space-y-2">
                                                <div className="md:flex gap-6 justify-center mb-8">
                                                    <div className="form-control md:w-1/2">
                                                        <label className="label">
                                                            <span className="label-text font-bold">Doctor Service</span>
                                                        </label>


                                                        <input {...register('services')} type="text" placeholder="Enter Doctor Service" className=" rounded-lg px-3 h-10 w-full border" required />

                                                    </div>
                                                    <div className="form-control md:w-1/2">
                                                        <label className="label">
                                                            <span className="label-text font-bold">Doctor Specialists</span>
                                                        </label>


                                                        <input {...register('specialties')} type="text" placeholder="Enter Doctor Specialists" className=" rounded-lg px-3 h-10 w-full border" required />

                                                    </div>


                                                </div>
                                                <div className="form-control md:w-full">
                                                    <label className="label">
                                                        <span className="label-text font-bold">Doctor's About</span>
                                                    </label>
                                                    <input {...register('aboutMe')} type="text" className=" rounded-lg px-3 h-10 w-full border" placeholder="Enter Your About" required></input>
                                                </div>
                                            </div>


                                            <div className='flex justify-between'>
                                                <button className="py-2 px-5 mb-4 mt-6 shadow-lg rounded-lg before:block before:-left-1 before:-top-1 before:bg-black before:rounded-lg before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%] before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:rounded-lg after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block" type="submit">Submit</button>
                                                <button onClick={() => { setOpenModal(false) }} className="py-2 px-5 mb-4 mt-6 shadow-lg rounded-lg before:block before:-left-1 before:-top-1 before:bg-black before:rounded-lg before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%] before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:rounded-lg after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block" >Close</button>
                                            </div>
                                        </form>


                                    </div>
                                </div>

                            </div>


                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegiModal;