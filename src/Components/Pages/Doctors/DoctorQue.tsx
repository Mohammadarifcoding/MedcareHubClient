import React, { useEffect, useState } from 'react';
import { base_URL } from '../../../utills/BaseURL.ts';
import DoctorQueRow from './DoctorQueRow.tsx';

const DoctorQue = () => {
    const [doctors, setdoctors] = useState([]);

    useEffect(() => {
        fetch(`${base_URL}/Doctors`)
            .then((res) => res.json())
            .then((data) => setdoctors(data));
    }, []);

    return (
        <div>
            <div className="mt-5 ml-3 md:ml-0 md:my-5">
                <h1 className="text-2xl font-semibold">Doctor Que</h1>
                <p>Explore and mange your Doctor Que effortlessly in one place.</p>
            </div>
            <div className="md:pt-0 pt-8 md:ml-4">
                <div className="overflow-x-auto w-full rounded-lg">
                    <table className="w-full table">
                        <thead className="bg-[#fafafad5] h-12 md:h-14 text-black text-sm lg:text-lg text-center">
                            <tr>
                                <th> Name</th>
                                <th> Doctor Type</th>
                                <th> Email</th>
                                <th>Gender</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className=" bg-base-300 ">
                        {doctors?.map((doctor) => (
                                        <DoctorQueRow key={doctor._id} doctor={doctor}></DoctorQueRow>
                                    ))}
                            {/* {doctor?.map((user) => (
                                <tr key={user?._id}>
                                    <td className="border-t px-6 py-4 text-center ">{user?.DocName}</td>
                                    <td className="border-t px-6 py-4 text-center ">{user?.DocType}</td>
                                    <td className="border-t px-6 py-4 text-center">{user?.Email}</td>
                                    <td className="border-t px-6 py-4 text-center">{user?.gender}</td>

                                    <td className="px-6 py-4 border-t text-center">
                                        <button className="text-white btn btn-ghost  hover:bg-[#393E46] bg-[#0360D9] hover:text-red-800">Pending</button>
                                    </td>

                                    <td className="px-6 py-4 border-t text-center">
                                        <div className="text-3xl flex gap-6">
                                            <button className="text-blue-700">
                                                <TiTickOutline />
                                            </button>
                                            <button className="text-red-700">
                                                <MdDelete />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))} */}

                            {/* Add more rows with user details */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DoctorQue;
