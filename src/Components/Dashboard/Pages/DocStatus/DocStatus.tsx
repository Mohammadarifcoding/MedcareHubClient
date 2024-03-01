import React, { useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { TiTickOutline } from 'react-icons/ti';
import Swal from 'sweetalert2';
import UseAuth from '../../../../Hook/UseAuth.tsx';

const DocStatus = () => {
    const [patients, setPatients] = useState([]);
    const [doctor, setDoctor] = useState("");

    const { user } = UseAuth();

    useEffect(() => {
        if (user && user.email) {
            fetch(`http://localhost:5000/doctor/${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setDoctor(data);
                    fetch(`http://localhost:5000/doctor/${data._id}/patients`)
                        .then(res => res.json())
                        .then(data => setPatients(data.filter(doctor => doctor.status.toLowerCase() !== "completed")))
                })
        }

    }, [user]);

    const handlecomplete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm"
        }).then(async (result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/doctor/${doctor._id}/patient/${id}/status/completed`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        Swal.fire('Successfully complete')
                    })
            }
        });
    }

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/doctor/${doctor._id}/patient/${id}/cancel`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        Swal.fire('Cancel successfully')
                    })
            }
        });
    }


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
                                    <th>Complete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {patients.map(({ _id, description, time, weekDay, status, patient }, index) => (
                                    <tr className="bg-[#FFFFFF] hover:bg-[#fafafa7e] " key={_id}>
                                        <th>{index + 1}</th>
                                        <td>{patient.patientName}</td>
                                        <td>{description}</td>
                                        <td>{time}</td>
                                        <td>{status}</td>
                                        <th>
                                            <button className="btn btn-sm text-blue-500 btn-circle  mb-3">
                                                <TiTickOutline />
                                            </button>
                                            <button onClick={() => handleDelete(patient._id)} className="btn btn-sm btn-circle text-red-600">
                                                <AiOutlineDelete />
                                            </button>
                                        </th>
                                        <th>
                                            <button onClick={() => handlecomplete(patient._id)} className='py-1 px-2 bg-[#0360D9]'>Done</button>
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
                                    <h1 className="mt-2">{doctor.startAvail} - {doctor.endAvail}</h1>
                                    <h1 className="mt-2">{doctor.startAvail} - {doctor.endAvail}</h1>
                                    <h1 className="mt-2">{doctor.startAvail} - {doctor.endAvail}</h1>
                                    <h1 className="mt-2 mb-6">{doctor.startAvail} - {doctor.endAvail}</h1>
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
