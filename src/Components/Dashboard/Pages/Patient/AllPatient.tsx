import React from 'react';
import AllPatientRow from './AllPatientRow.tsx';
import UseAxiosPublic from '../../../../Hook/UseAxiosPublic.tsx';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
const AllPatient = () => {
    const axiosPublic = UseAxiosPublic()


    const { data: patient = [], refetch } = useQuery({
        queryKey: ['patient'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/Patients`);
            return res.data;
        }
    });
    // console.log(patient);

    const handleChangePatientStatus = (user, status) => {
        console.log(user);
        axiosPublic.patch(`Patient/status/${user?._id}`, { status }).then((res) => {
            console.log(res);
            if (res.data.status) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.patientName} is now ${status}`,
                    showConfirmButton: false,
                    timer: 1500
                });
                refetch();
            }
        });
    };

    const handleDeletePatient = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`Patient/${user._id}`).then((res) => {
                    Swal.fire({
                        title: 'Deleted!',
                        text: 'Patient has been deleted.',
                        icon: 'success'
                    });
                    refetch();
                });
            }
        });
    };


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
                                <th className="text-center">Accept</th>
                                <th className="text-center">Reject</th>
                                <th className="text-center">Delete</th>
                            </tr>
                        </thead>
                        <tbody className="bg-base-300 ">
                            {patient?.map((user) => (
                                <AllPatientRow key={user?._id} user={user} handleChangePatientStatus={handleChangePatientStatus} handleDeletePatient={handleDeletePatient}></AllPatientRow>
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
