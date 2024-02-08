
import React, { useState } from 'react';
import UseSingleBlog from '../../../Hook/UseSingleBlog.tsx';
import Swal from 'sweetalert2';
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { base_URL } from '../../../utills/BaseURL.ts';
import BlogModal from './BlogModal.tsx';

const MyBlog = () => {

    const [blogsData] = UseSingleBlog()
    const [refetchData, setRefecthData] = useState(false)
    const [openModal, setOpenModal] = useState(false);
    const [blog, setBlog] = useState()
    const {
        register,
        handleSubmit,
    } = useForm()

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




    // const handleBlogEdit = (data) => {
    //     console.log(data);
    //     const formData = {
    //         BlogName: data.BlogName,
    //         BlogWriting: data.BlogWriting,
    //         BlogPic: data.BlogPic,
    //         BlogWriterName: data.BlogWriterName,
    //         BlogWriterImage: data.BlogWriterImage
    //     };
    //     console.log(formData);
    //     axios.put(`${base_URL}/Blogs/${data.id}`, formData)
    //         .then((res) => {
    //             console.log(res);
    //             Swal.fire("You registered for doctor successfully!");
    //             setOpenModal(false)

    //         })
    //         .catch((error) => console.error("Error updating status:", error));
    // };



    return (

        <div>
            <div className="overflow-x-auto">


                <table className="min-w-full border  border-[#0360D9] rounded-xl">
                    <thead className="bg-[#0360D9] text-white">
                        <tr>
                            {/* <th className="px-6 py-3 text-center"> Blog Image</th> */}
                            <th className="px-6 py-3 text-center">Writer  Name</th>
                            <th className="px-6 py-3 text-center">Blog  Name</th>
                            <th className="px-6 py-3 text-center"> Email</th>
                            <th className="px-6 py-3 text-center"> Blog Time</th>
                            <th className="px-6 py-3 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="rounded-xl">
                        {blogsData?.map((blog) => <tr key={blog?._id}>

                            {/* <td className="border-t px-6 py-4 text-center "><img className='w-[40px] h-[40px] rounded-full' src={blog?.BlogPic} alt="" /></td> */}
                            <td className="border-t px-6 py-4 text-center">{blog?.BlogWriterName}</td>
                            <td className="border-t px-6 py-4 text-center ">{blog?.BlogName.slice(0, 18)}...</td>

                            <td className="border-t px-6 py-4 text-center">{blog?.email}</td>
                            <td className="border-t px-6 py-4 text-center">{blog?.BlogTime}</td>




                            <td className=" py-4 border-t text-center">

                                <div className='flex '>
                                    <BlogModal openModal={openModal} setOpenModal={setOpenModal} blog={blog} />
                                    <button onClick={() => handleDeleteUser(blog)} className="text-red-600 text-3xl">
                                        <MdDelete />
                                    </button>
                                </div>


                            </td>
                        </tr>)}
                    </tbody>
                </table>


            </div>
        </div>


    );
};

export default MyBlog;