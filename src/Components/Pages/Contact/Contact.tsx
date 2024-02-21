import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';
import UseAuth from '../../../Hook/UseAuth.tsx';
import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from '../../../Hook/UseAxiosPublic.tsx';

const Contact = () => {
    const form = useRef();
    const { user } = UseAuth();
    const axiosPublic = UseAxiosPublic();

    // const { data: doctors = [], refetch } = useQuery({
    //     queryKey: ['doctors'],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get(`/doctors`);
    //         return res.data;
    //     }
    // });

    // useEffect(() => {
    //     fetch(`http://localhost:5000/`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             setData(data);
    //         })
    //         .catch((error) => {
    //             console.log(error.message);
    //         });
    // }, []);


    const sendEmail = async (e) => {
        e.preventDefault();

        try {
            // Send email using emailjs
            const result = await emailjs.sendForm('service_t5rw20g', 'template_fm2q7f7', form.current, '53e7lEtq-rLlUMSyB');

            console.log('Email sent successfully:', result.text);
            // Show success SweetAlert
            Swal.fire({
                icon: 'success',
                title: 'Email sent successfully!',
                text: result.text
            });
        } catch (error) {
            console.error('Error sending email:', error);
            // Show error SweetAlert
            Swal.fire({
                icon: 'error',
                title: 'Error sending email',
                text: error.message // Use error.message to display the error message
            });
        }
    };
    return (
        <div>
            {/* map */}
            <div className="w-full h-[400px] bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe
                    width="100%"
                    height="100%"
                    className="absolute w-full inset-0 h-[500px]"
                    frameBorder={0}
                    title="map"
                    marginHeight={0}
                    marginWidth={0}
                    scrolling="no"
                    src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                    style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
                />
                <div className="">
                    <div className="lg:w-1/2 px-6">
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                        <p className="mt-1">Bangladesh,Dhaka</p>
                    </div>
                </div>
            </div>
            {/* contact */}
            <section className="flex container mx-auto md:flex-row  flex-col items-center justify-around ">
                <div className="py-16 px-2">
                    {/* form */}
                    <form onSubmit={sendEmail} ref={form}>
                        <div className="   bg-gray-200 pt-6 pb-5 max-w-[500px] px-2">
                            <div>
                                <h2 className="text-gray-900 md:text-3xl sm:text-xl mb-1 font-bold title-font pt-4 pb-1 pl-4">Book Your Appointment Now</h2>
                                <p className="md:text-sm text-blue-700 text-[12px] font-bold pl-4">Book your appointment as your requirement</p>
                            </div>
                            <div className="relative flex flex-col pl-4 px-2 pt-4">
                                <label htmlFor="department" className="leading-7 text-sm text-black font-medium pb-2">
                                    User Name
                                </label>
                                <input
                                    name="from_name"
                                    className="w-full max-w-[400px]  bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    defaultValue={user?.displayName}
                                    type="text"
                                    id=""
                                />
                            </div>

                            <div className="relative flex flex-col pl-4 px-2 pt-4">
                                <label htmlFor="department"  className="leading-7 text-sm text-black font-medium pb-2">
                                    Email Address
                                </label>
                                <input
                                    name="form_email"
                                    className="w-full max-w-[400px]  bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    defaultValue={user?.email}
                                    type="email"
                                    id=""
                                />
                            </div>
                            <div className="relative flex flex-col pl-4 px-2 pt-4 ">
                                <label htmlFor="department" className="leading-7 text-sm text-black font-medium pb-2">
                                    Select Department
                                </label>
                                <select
                                    id="department"
                                    name="department"
                                    className="w-full max-w-[400px] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                >
                                  

                                    <option value="department1">1</option>
                                </select>
                            </div>
                            <div className="relative flex flex-col pl-4 px-2 pt-4">
                                <label htmlFor="doctor" className="leading-7 text-sm text-black font-medium pb-2">
                                    Select Doctor
                                </label>
                                <select
                                    id="doctor"
                                    name="doctor"
                                    className="w-full max-w-[400px] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                >
                                    <option value="doctor1">Doctor 1</option>
                                    <option value="doctor2">Doctor 2</option>
                                </select>
                            </div>
                            <div className="relative flex flex-col pl-4 px-2 pt-4">
                                <label htmlFor="message" className="leading-7 text-sm text-black font-medium">
                                    Description
                                </label>
                                <textarea
                                
                                    id="message"
                                    name="message"
                                    className="w-full max-w-[400px] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    defaultValue={''}
                                />
                            </div>
                            <div className="pl-4  md:w-[460px] sm:w-[220px] mt-3">
                                <button className="text-white lg:text-xl md:text-lg sm:text-base text-sm bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded ">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="md:w-[650px]  sm:w[320px]">
                    <h1 className="text-gray-900 md:text-2xl mb-1 font-bold title-font pt-4 pb-1 pl-4">CONTACT INFO</h1>

                    <p className="text-sm pl-4 text-black">
                        Our health organization is dedicated to enhancing well-being through comprehensive healthcare solutions. We prioritize personalized care, cutting-edge medical technology, and a
                        patient-centric approach. From preventive services to specialized treatments, we strive to empower individuals on their journey to optimal health. Join us in experiencing
                        compassionate care that focuses on your unique needs and fosters a healthier community.
                    </p>

                    <div className="flex md:flex-row flex-col justify-center py-12 gap-10">
                        <div className="flex flex-row items-center justify-center gap-3">
                            <img className="md:h-12 h-8" src="https://i.ibb.co/Pc5gvsZ/images-removebg-preview-1.png" alt="" />
                            <div>
                                <p className="text-blue-600 font-bold"> +8801765223465</p>
                                <p className="font-medium">management@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex flex-row  items-center justify-center">
                            <img
                                className="md:h-14 h-10"
                                src="https://i.ibb.co/vc6pGHp/gratis-png-logo-de-ubicacion-ubicacion-duke-universidad-logo-informacion-tierra-azul-thumbnail-remov.png"
                                alt=""
                            />
                            <div>
                                <p className="text-blue-600 font-bold"> 47Th,Avenue</p>
                                <p className="font-medium">Banghladesh,Dhaka</p>
                            </div>
                        </div>
                    </div>
                    <hr className="font-bold"></hr>
                    <div className="pl-4">
                        <p className="py-4 font-medium text-black">Emergency Contact:+8801677874522</p>
                        <hr className="font-bold"></hr>
                        <p className="py-4 font-medium text-black">Visit Contact:+8801789564322</p>
                        <hr className="font-bold"></hr>
                        <p className="py-4 font-medium text-black">Phone Contact:+8801907874522</p>
                        <hr className="font-bold"></hr>
                        <p className="py-4 font-medium text-black">Email:management@gmail.com</p>
                        <hr className="font-bold"></hr>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
