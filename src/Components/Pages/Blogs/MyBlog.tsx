import moment from 'moment';
import React, { useState } from 'react';
import UseSingleBlog from '../../../Hook/UseSingleBlog.tsx';
import { AiFillLike } from "react-icons/ai";
import Swal from 'sweetalert2';
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

const MyBlog = () => {

    const [blogsData] = UseSingleBlog()
    const [refetchData, setRefecthData] = useState(false)
 
    const handleDeleteUser = blog => {
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

                axios.delete(`http://localhost:5000/Blog/${blog?._id}`)
                    .then(res => {


                        Swal.fire({
                            title: "Deleted!",
                            text: "User has been deleted.",
                            icon: "success"
                        });
                        setRefecthData(!refetchData)
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
                            <th className="px-6 py-3 text-center"> Blog Image</th>
                            <th className="px-6 py-3 text-center">Blog  Name</th>
                            <th className="px-6 py-3 text-center"> Email</th>
                            <th className="px-6 py-3 text-center"> Blog Time</th>
                            <th className="px-6 py-3 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="rounded-xl">
                        {blogsData?.map((blog) => <tr key={blog?._id}>
                            
                            <td className="border-t px-6 py-4 text-center "><img className='w-[40px] h-[40px] rounded-full' src={blog?.BlogPic} alt="" /></td>
                            <td className="border-t px-6 py-4 text-center ">{blog?.BlogName}</td>
                            <td className="border-t px-6 py-4 text-center">{blog?.email}</td>
                            <td className="border-t px-6 py-4 text-center">{blog?.BlogTime}</td>
                        



                            <td className="px-6 py-4 border-t text-center">
                                <button onClick={() => handleDeleteUser(blog)} className="text-red-600 text-3xl">
                                    <MdDelete />
                                </button>


                            </td>
                        </tr>)}
                    </tbody>
                </table>


            </div>
        </div>
   
      
    );
};

export default MyBlog;