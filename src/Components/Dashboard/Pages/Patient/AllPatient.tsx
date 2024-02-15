import React, { useEffect, useState } from 'react';
import { base_URL } from '../../../../utills/BaseURL.ts';
import { TiTickOutline } from 'react-icons/ti';
import { MdDelete } from 'react-icons/md';
import AllPatientRow from './AllPatientRow.tsx';
const AllPatient = () => {
    const [patient, setPatient] = useState();
    useEffect(() => {
        fetch(`${base_URL}/Patients`)
            .then((res) => res.json())
            .then((data) => setPatient(data));
    }, []);

    // console.log(patient);
    return (
        <>
            <div className="mt-5 ml-3 md:ml-0 md:my-5">
                <h1 className="text-2xl font-semibold">All Patient</h1>
                <p>Explore and mange your All Patient effortlessly in one place.</p>
            </div>
            <div className="md:pt-0 pt-8 md:ml-4">
                <div className="overflow-x-auto w-full rounded-lg">
                    <table className="table w-full ">
                        <thead className="bg-[#fafafad5] h-12 md:h-14 text-black text-sm lg:text-lg ">
                            <tr className="">
                                <th> Name</th>
                                <th> Age</th>
                                <th>Blood Group</th>
                                <th>Patient Issue</th>
                                <th>Gender</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-base-300 ">
                            {patient?.map((user) => (
                                <AllPatientRow key={user?._id} user={user}></AllPatientRow>
                            ))}

                            {/* Add more rows with user details */}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AllPatient;
