import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FaTimes } from 'react-icons/fa';
import Swal from 'sweetalert2';
import UseAxiosPublic from '../../../Hook/UseAxiosPublic.tsx';
import UseAuth from '../../../Hook/UseAuth.tsx';
import AllUserRow from './AllUserRow.tsx';

const AllUser = () => {
    const axiosPublic = UseAxiosPublic();
    const { user } = UseAuth();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/Users`);
            return res.data;
        }
    });
    const handleChangeUserRole = (user, role) => {
        console.log(user._id, role);
        axiosPublic.patch(`user/role/${user._id}`, { role }).then((res) => {
            console.log(res);
            if (res.data.role) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is now ${role}`,
                    showConfirmButton: false,
                    timer: 1500
                });
                refetch();
            }
        });
    };

    const handleDeleteUser = (user) => {
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
                axios.delete(`http://localhost:5000/user/${user._id}`).then((res) => {
                    Swal.fire({
                        title: 'Deleted!',
                        text: 'User has been deleted.',
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
                <h1 className="text-2xl font-semibold">All User</h1>
                <p>Explore and mange All User effortlessly in one place.</p>
            </div>
            <div className="md:pt-0 pt-8 md:ml-4">
                <div className="overflow-x-auto w-full rounded-lg">
                    <table className="table w-full ">
                        <thead className="bg-[#fafafad5] h-12 md:h-14 text-black text-sm lg:text-lg ">
                            <tr>
                                <th>User Name</th>
                                <th> Email</th>
                                <th>Gender</th>
                                <th>Role</th>
                                <th>Give Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-base-300 ">
                            {users?.data?.map((user) => (
                                <AllUserRow key={user._id} user={user} handleChangeUserRole={handleChangeUserRole} handleDeleteUser={handleDeleteUser}></AllUserRow>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AllUser;
