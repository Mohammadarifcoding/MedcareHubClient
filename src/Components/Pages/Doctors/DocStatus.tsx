import React, { useEffect, useState } from 'react';
import { base_URL } from '../../../utills/BaseURL.ts';
import { TiTickOutline } from "react-icons/ti";
const DocStatus = () => {
    const [doctor, setdoctor] = useState([])

    useEffect(() => {
        fetch(`${base_URL}/Doctors`)
            .then(res => res.json())
            .then(data => setdoctor(data));

    }, [])



    return (
        <div className="">
            <div>
                <h2 className="text-xl font-bold mt-6 mb-6">Patient: {doctor.length}</h2>
            </div>
            <div className="flex ">
                <div className="overflow-x-auto w-[1000px] border shadow-xl border-blue-300 p-4 rounded-xl">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#0360D9] text-white">
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Doctor Type</th>
                                <th>Schedule Time</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        {
                            doctor.map(({ DocName, DocType, startAvail, endAvail }, index) => (

                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td>{DocName}</td>
                                        <td>{DocType}</td>
                                        <td>{startAvail} to {endAvail}</td>
                                        <td >
                                            Waiting
                                        </td>
                                        <td >
                                            <button className="btn btn-sm text-blue-500 btn-circle">
                                                <TiTickOutline />
                                            </button>
                                            <button className="btn btn-sm btn-circle text-red-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            ))
                        }
                    </table>
                </div>

            </div>
        </div>
    );
};

export default DocStatus;