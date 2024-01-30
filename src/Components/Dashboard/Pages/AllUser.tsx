import React from 'react';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FaTimes } from "react-icons/fa";

const AllUser = () => {


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/Users`)
            return res.data;
        }
    })
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
                        {users?.map(user => <tr key={user?._id}>
                            <td className="border-t px-6 py-4 text-center "><img className='w-[40px] h-[40px] rounded-full' src={user?.imageURL} alt="" /></td>
                            <td className="border-t px-6 py-4 text-center ">{user?.name}</td>
                            <td className="border-t px-6 py-4 text-center">{user?.email}</td>
                            <td className="border-t px-6 py-4 text-center">{user?.gender}</td>



                            <td className="px-6 py-4 border-t text-center">
                                <button  className="text-red-600 btn btn-ghost  hover:bg-[#393E46] bg-[#0360D9] hover:text-red-800">
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