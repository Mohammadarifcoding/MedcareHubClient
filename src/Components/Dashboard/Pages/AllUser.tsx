import React from 'react';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FaTimes } from "react-icons/fa";
import Swal from 'sweetalert2';

const AllUser = () => {


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/Users`)
            return res.data;
        }
    })


    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:5000/user/${user._id}`)
                    .then(res => {


                        Swal.fire({
                            title: "Deleted!",
                            text: "User has been deleted.",
                            icon: "success"
                        });
                        refetch();
                    })
            }
        });
    }

    return (
        <div>
            <div className="overflow-x-auto">


                <table className="min-w-full border  border-[#0360D9] rounded-xl">
                    <thead className="bg-[#0360D9] text-white">
                        <tr>
                            <th className="px-6 py-3 text-center"> User Avater</th>
                            <th className="px-6 py-3 text-center"> Name</th>
                            <th className="px-6 py-3 text-center"> Email</th>
                            <th className="px-6 py-3 text-center">Gender</th>
                            <th className="px-6 py-3 text-center">Delete User</th>
                        </tr>
                    </thead>
                    <tbody className="rounded-xl">
                        {users?.data?.map((user) => <tr key={user?._id}>
                            <td className="border-t px-6 py-4 text-center "><img className='w-[40px] h-[40px] rounded-full' src={user?.imageURL} alt="" /></td>
                            <td className="border-t px-6 py-4 text-center ">{user?.name}</td>
                            <td className="border-t px-6 py-4 text-center">{user?.email}</td>
                            <td className="border-t px-6 py-4 text-center">{user?.gender}</td>



                            <td className="px-6 py-4 border-t text-center">
                                <button onClick={() => handleDeleteUser(user)} className="text-red-600 btn btn-ghost  hover:bg-[#393E46] bg-[#0360D9] hover:text-red-800">
                                    <FaTimes />
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

export default AllUser;