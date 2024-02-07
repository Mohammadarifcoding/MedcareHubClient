import React, { useEffect, useState } from 'react';
import { base_URL } from '../../../utills/BaseURL.ts';
import { TiTickOutline } from "react-icons/ti";
const DoctorQue = () => {
    const [doctor, setdoctor] = useState([])

    useEffect(() => {
        fetch(`${base_URL}/Doctors`)
            .then(res => res.json())
            .then(data => setdoctor(data));

    }, [])



    return (
        <div>
            <div className="overflow-x-auto">


                <table className="min-w-full border  border-[#0360D9] rounded-xl">
                    <thead className="bg-[#0360D9] text-white">
                        <tr>
                           
                            <th className="px-6 py-3 text-center"> Name</th>
                            <th className="px-6 py-3 text-center"> Doctor Type</th>
                            <th className="px-6 py-3 text-center"> Email</th>
                            <th className="px-6 py-3 text-center">Gender</th>
                            <th className="px-6 py-3 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="rounded-xl">
                        {doctor?.map((user) => <tr key={user?._id}>
                           
                            <td className="border-t px-6 py-4 text-center ">{user?.DocName}</td>
                            <td className="border-t px-6 py-4 text-center ">{user?.DocType}</td>
                            <td className="border-t px-6 py-4 text-center">{user?.Email}</td>
                            <td className="border-t px-6 py-4 text-center">{user?.gender}</td>



                            <td className="px-6 py-4 border-t text-center">
                                <button  className="text-white btn btn-ghost  hover:bg-[#393E46] bg-[#0360D9] hover:text-red-800">
                                    Pending
                                </button>


                            </td>
                        </tr>)}

                        {/* Add more rows with user details */}
                    </tbody>
                </table>


            </div>
        </div>
    );
};

export default DoctorQue;