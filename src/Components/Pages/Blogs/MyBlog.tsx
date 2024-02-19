
import React, { useState } from 'react';
import UseSingleBlog from '../../../Hook/UseSingleBlog.tsx';
import Swal from 'sweetalert2';
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import BlogModal from './BlogModal.tsx';


const MyBlog = () => {


    const { blogsData, isLoading, refetch } = UseSingleBlog()
    const [openModal, setOpenModal] = useState(false);


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

                axios.delete(`http://localhost:5000/Blog/${blog?.ID}`)
                    .then(res => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "User has been deleted.",
                            icon: "success"
                        });
                        refetch()
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        });
    }




    return (
        <>
            <div className="mt-5 ml-3 md:ml-0 md:my-5">
                <h1 className="text-2xl font-semibold">My Blog</h1>
                <p>Explore and mange your Blog inventory effortlessly in one place.</p>
            </div>
            <div className="md:pt-0 pt-8 md:ml-4">

                {
                    !isLoading ? (
                        blogsData?.length ?
                            (<div className="overflow-x-auto w-full rounded-lg">
                                <table className="table w-full">
                                    <thead className="bg-[#fafafad5] h-12 md:h-14 text-black text-sm lg:text-lg ">
                                        <tr>
                                            {/* <th className="px-6 py-3 "> Blog Image</th> */}
                                            <th >Writer  Name</th>
                                            <th >Blog  Name</th>
                                            <th > Email</th>
                                            <th > Blog Time</th>
                                            <th >Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-base-300 ">
                                        {blogsData?.map((blog) => <tr className='bg-[#FFFFFF] hover:bg-[#fafafa7e] ' key={blog?._id}>

                                            {/* <td className="border-t px-6 py-4  "><img className='w-[40px] h-[40px] rounded-full' src={blog?.BlogPic} alt="" /></td> */}
                                            <td className="border-t px-6 py-4 ">{blog?.BlogWriterName}</td>
                                            <td className="border-t px-6 py-4  ">{blog?.BlogName.slice(0, 18)}...</td>

                                            <td className="border-t px-6 py-4 ">{blog?.email}</td>
                                            <td className="border-t px-6 py-4 ">{blog?.BlogTime}</td>




                                            <td className=" py-4 border-t ">

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


                            </div>) :
                            (
                                <div className="text-center mx-auto col-span-1 md:col-span-2 lg:col-span-3 my-20 md:my-32 lg:my-40">
                                    <h1 className="font-bold loading-10  text-3xl">
                                        <span className="font-extrabold text-red-600"> Oops, </span> <br />
                                        it seems like there are currently no <br /> blog has been added by you. Please <br /> Order to see them.
                                    </h1>
                                </div>
                            ))
                        :
                        (
                            <div className="space-y-14">
                                <div className=" w-full animate-pulse bg-[#657287] flex justify-center flex-col items-start mx-auto p-6 rounded-md shadow-xl">
                                    {/* User profile  Skeleton */}
                                    <div className="w-full flex gap-2 items-center">
                                        <div className="w-16 h-16 rounded-full bg-[#9FADC2] animate-pulse"></div>
                                        <div className="w-[80%]">
                                            <div className="w-[30%] rounded-full bg-[#9FADC2] h-[15px] mb-3"></div>
                                            <div className="w-[40%] rounded-full bg-[#9FADC2] h-[15px]"></div>
                                        </div>
                                    </div>
                                    {/* user post skeleton */}
                                    <div className="mt-8 w-full">
                                        <div className="w-full rounded-full bg-[#9FADC2] h-[15px] mb-3"></div>
                                        <div className="w-[90%] rounded-full bg-[#9FADC2] h-[15px]"></div>
                                    </div>
                                </div>
                                <div className=" w-full animate-pulse bg-[#657287] flex justify-center flex-col items-start mx-auto p-6 rounded-md shadow-xl">
                                    {/* User profile  Skeleton */}
                                    <div className="w-full flex gap-2 items-center">
                                        <div className="w-16 h-16 rounded-full bg-[#9FADC2] animate-pulse"></div>
                                        <div className="w-[80%]">
                                            <div className="w-[30%] rounded-full bg-[#9FADC2] h-[15px] mb-3"></div>
                                            <div className="w-[40%] rounded-full bg-[#9FADC2] h-[15px]"></div>
                                        </div>
                                    </div>
                                    {/* user post skeleton */}
                                    <div className="mt-8 w-full">
                                        <div className="w-full rounded-full bg-[#9FADC2] h-[15px] mb-3"></div>
                                        <div className="w-[90%] rounded-full bg-[#9FADC2] h-[15px]"></div>
                                    </div>
                                </div>
                            </div>
                        )
                }
            </div>

        </>
    );
};

export default MyBlog;