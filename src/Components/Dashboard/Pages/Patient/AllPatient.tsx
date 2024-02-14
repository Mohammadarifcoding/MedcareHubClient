import React, { useEffect, useState } from 'react';
import { base_URL } from '../../../../utills/BaseURL.ts';
import { TiTickOutline } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
const AllPatient = () => {
    const [patient, setPatient] = useState()
    useEffect(() => {
        fetch(`${base_URL}/Patients`)
            .then(res => res.json())
            .then(data => setPatient(data))
    },[])

    // console.log(patient);
    return (
        <div className="overflow-x-auto">


            <table className="min-w-full border  border-[#0360D9] rounded-xl">
                <thead className="bg-[#0360D9] text-white">
                    <tr>

                        <th className="px-6 py-3 text-center"> Name</th>
                        <th className="px-6 py-3 text-center"> Age</th>
                        <th className="px-6 py-3 text-center">Blood Group</th>
                        <th className="px-6 py-3 text-center">Patient Issue</th>
                        <th className="px-6 py-3 text-center">Gender</th>
                        <th className="px-6 py-3 text-center">Status</th>
                        <th className="px-6 py-3 text-center">Action</th>
                    </tr>
                </thead>
                <tbody className="rounded-xl">
                    {patient?.map((user) => <tr key={user?._id}>

                        <td className="border-t px-6 py-4 text-center ">{user?.patientName}</td>
                        <td className="border-t px-6 py-4 text-center ">{user?.Age}</td>
                        <td className="border-t px-6 py-4 text-center">{user?.bloodGroup}</td>
                        <td className="border-t px-6 py-4 text-center">{user?.patientIssue}</td>
                        <td className="border-t px-6 py-4 text-center">{user?.Gender}</td>



                        <td className="px-6 py-4 border-t text-center">
                            <button className="text-white btn btn-ghost  hover:bg-[#393E46] bg-[#0360D9] hover:text-red-800">
                                Pending
                            </button>


                        </td>

                        <td className="px-6 py-4 border-t text-center">
                            <div className='text-3xl flex gap-6'>
                                <button className='text-blue-700'>
                                    <TiTickOutline />
                                </button>
                                <button className='text-red-700'>
                                    <MdDelete />
                                </button>
                            </div>
                        </td>
                    </tr>)}

                    {/* Add more rows with user details */}
                </tbody>
            </table>


        </div>
    );
};

export default AllPatient;