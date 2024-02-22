import { useEffect, useState } from 'react';
import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { TiTickOutline } from 'react-icons/ti';

const DocStatus = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetch('/patients.json')
            .then((res) => res.json())
            .then((data) => setPatients(data));
    }, []);

    // const handleBookingConfirm = id => {
    //     fetch(`/patients.json/${id}`)
    //         .then(res => res.json())
    //         .then(data => setPatients(data));
    // }
    return (
        <div className="">
            <div className="mt-5 ml-3 md:ml-0 md:my-5">
                <h1 className="text-2xl font-semibold">Doctor Status</h1>
                <p>Explore and mange your Doctor Status effortlessly in one place.</p>
            </div>
            <div className="md:pt-0 pt-8 md:ml-4">
                <div>
                    <h2 className="text-xl font-bold mt-6 mb-6">Patient: {patients.length}</h2>
                </div>
                <div className="flex lg:flex-row md:flex-col flex-col gap-4">
                    <div className="overflow-x-auto border w-full shadow-xl border-blue-300 p-4 rounded-xl">
                        <table className="table w-full ">
                            {/* head */}
                            <thead className="bg-[#fafafad5]  h-12 md:h-14 text-black text-sm lg:text-lg ">
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Schedule Time</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {patients.map(({ id, name, description, schedule }, index) => (
                                    <tr className="bg-[#FFFFFF] hover:bg-[#fafafa7e] " key={id}>
                                        <th>{index + 1}</th>
                                        <td>{name}</td>
                                        <td>{description}</td>
                                        <td>{schedule}</td>
                                        <td>Waiting</td>
                                        <th>
                                            <button className="btn btn-sm text-blue-500 btn-circle  mb-3">
                                                <TiTickOutline />
                                            </button>
                                            <button className="btn btn-sm btn-circle text-red-600">
                                                <AiOutlineDelete />
                                            </button>
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <div className="border border-blue-300 shadow-xl p-4 mb-4 rounded-xl">
                            <h1 className="text-xl font-bold mt-6">Doctor's Schedule</h1>
                            <div className="grid grid-cols-2 gap-16">
                                <div>
                                    <h1 className="mt-2">Monday - Fridayp</h1>
                                    <h1 className="mt-2">Saturday</h1>
                                    <h1 className="mt-2">Monday - Thusday</h1>
                                    <h1 className="mt-2">Monday - Friday</h1>
                                </div>
                                <div>
                                    <h1 className="mt-2">8.00-20.00</h1>
                                    <h1 className="mt-2">9.00-18.30</h1>
                                    <h1 className="mt-2">9.00-15.00</h1>
                                    <h1 className="mt-2 mb-6">8.00-20.00</h1>
                                </div>
                            </div>
                        </div>
                        <div className="border border-blue-300 shadow-xl p-4 rounded-xl">
                            <h2 className="text-xl font-bold mt-6 mb-4">Next Patient:</h2>
                            <h2 className="mt-2">Name: Ava Jones</h2>
                            <h2 className="mt-2">Email: ava.jones@example.com</h2>
                            <h2 className="mt-2">Description: Neurology appointment</h2>
                            <h2 className="mt-2 mb-6">Schedule: 2024-02-05T12:30:00</h2>
                        </div>
                        <div
                            className=" mt-4 text-black border
                     border-blue-300 shadow-xl p-4 rounded-xl"
                        >
                            <form>
                                <label>Name</label>
                                <br />
                                <input
                                    type="text"
                                    className="h-10 w-full mb-2 text-sm focus:outline-none
                        text-[#0360D9] p-2 rounded-xl"
                                    name="to_name"
                                />
                                <br />
                                <label>Email</label> <br />
                                <input
                                    type="email"
                                    className="h-10 w-full focus:outline-none mb-2 text-sm
                        text-[#0360D9] p-2 rounded-xl "
                                    name="email_id"
                                />
                                <br />
                                <label>Message</label> <br />
                                <textarea name="message" className="text-[#0360D9] focus:outline-none w-full p-2" /> <br />
                                <input className="btn mt-2 bg-[#0360D9] text-sm text-white" type="submit" value="Send" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DocStatus;
