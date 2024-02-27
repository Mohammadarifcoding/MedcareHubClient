import React, { useEffect, useState } from 'react';
import UseAuth from '../../../../Hook/UseAuth.tsx';

const DoctorHistory = () => {

    const [patients, setPatients] = useState([]);
    const [doctor, setDoctor] = useState("");

    const { user } = UseAuth();

    useEffect(() => {
        if (user && user.email) {
            fetch(`https://medicinehub.vercel.app/doctor/${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setDoctor(data);
                    fetch(`https://medicinehub.vercel.app/doctor/${data._id}/patients`)
                        .then(res => res.json())
                        .then(data => setPatients(data.filter(doctor => doctor.status.toLowerCase() === "completed")))
                })
        }

    }, [user]);


    return (
        <div>
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>

            </div>
        </div>
    );
};

export default DoctorHistory;