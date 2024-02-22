import React from 'react';

import UseAxiosPublic from '../../../../Hook/UseAxiosPublic.tsx';
import { useQuery } from '@tanstack/react-query';
import AllCompanyrow from './AllCompanyrow.jsx';
import Swal from 'sweetalert2';

const AllCompany = () => {

    const axiosPublic = UseAxiosPublic()


    const { data: companys = [], refetch } = useQuery({
        queryKey: ['companys'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/Companys`);
            return res.data;
        }
    });

    const handleChangeCompanyStatus = (user, status) => {
        console.log(user);
        axiosPublic.patch(`Company/status/${user?._id}`, { status }).then((res) => {
            console.log(res);
            if (res.data.status) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.comname} is now ${status}`,
                    showConfirmButton: false,
                    timer: 1500
                });
                refetch();
            }
        });
    };

    const handleDeleteCompany = (user) => {
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
                axiosPublic.delete(`Company/${user._id}`).then((res) => {
                    Swal.fire({
                        title: 'Deleted!',
                        text: 'Comapany has been deleted.',
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
                <h1 className="text-2xl font-semibold">All Company</h1>
                <p>Explore and mange All Company effortlessly in one place.</p>
            </div>
            <div className="md:pt-0 pt-8 md:ml-4">
                <div className="overflow-x-auto w-full rounded-lg">
                    <table className="table w-full ">
                        <thead className="bg-[#fafafad5] px-6 py-3 text-center h-12 md:h-14 text-black text-sm lg:text-lg ">
                            <tr>
                                <th>Company Name</th>
                                <th>Company Email</th>
                                <th>Owner Email</th>
                                <th>Status</th>
                                <th className="text-center">Accept</th>
                                <th className="text-center">Reject</th>
                                <th className="text-center">Delete</th>
                            </tr>
                        </thead>

                        <tbody className="bg-base-300 ">
                            {companys?.map((company) => (
                                <AllCompanyrow key={company?._id} company={company} handleChangeCompanyStatus={handleChangeCompanyStatus} handleDeleteCompany={handleDeleteCompany} ></AllCompanyrow>
                            ))}

                            {/* Add more rows with user details */}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AllCompany;
