import React, { useEffect, useState } from 'react';
import { base_URL } from '../../../utills/BaseURL.ts';
import DoctorQueRow from './DoctorQueRow.tsx';
import axiosPublic from '../../../Hook/UseAxiosPublic.tsx';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from '../../../Hook/UseAxiosPublic.tsx';


const DoctorQue = () => {

    const axiosPublic = UseAxiosPublic()


    const { data: doctors = [], refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/Doctors`);
            return res.data;
        }
    });

    const handleChangeDoctorStatus = (user, status) => {
        console.log(user);
        axiosPublic.patch(`doctor/status/${user?._id}`, { status }).then((res) => {
            console.log(res);
            if (res.data.status) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.DocName} is now ${status}`,
                    showConfirmButton: false,
                    timer: 1500
                });
                refetch();
            }
        });
    };

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
                                <button className="text-white btn btn-ghost  hover:bg-[#393E46] bg-[#0360D9] hover:text-red-800">
                                    Pending
                                </button>


                            </td>
                        </tr>)}

                        {/* Add more rows with user details */}
                    </tbody>
                </table>


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
                                    <DoctorQueRow key={doctor._id} doctor={doctor} handleChangeDoctorStatus={handleChangeDoctorStatus}></DoctorQueRow>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            );
};

            export default DoctorQue;
