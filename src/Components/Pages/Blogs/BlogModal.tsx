import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEdit } from "react-icons/fa";
import Swal from 'sweetalert2';
import { base_URL } from '../../../utills/BaseURL.ts';

const BlogModal = ({ blog }) => {
     const [openModal, setOpenModal] = useState(true);
    const {
        register,
        handleSubmit,
    } = useForm()


    console.log("Blog Modal Rendered with Blog:", blog);

    const handleBlogEdit = (data) => {
        console.log(data);
        const blogData = {
            BlogName: data.BlogName,
            BlogWriting: data.BlogWriting,
            BlogWriterName: data.BlogWriterName
        };
        console.log(blogData);
        axios.put(`${base_URL}/Blogs/${data.id}`, blogData)
            .then((res) => {
                console.log(res);
                Swal.fire("You registered for doctor successfully!");
                setOpenModal(false)

            })
            .catch((error) => console.error("Error updating status:", error));
    }


    return (
        <div >

            <button onClick={() => setOpenModal(true)} className=" text-3xl text-blue-600 mx-4 "><FaEdit /></button>

            <div className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} duration-300 inset-0 w-full h-full`}>
                <div onClick={(e_) => e_.stopPropagation()} className={`absolute overflow-x-hidden overflow-y-scroll w-full h-full flex justify-center bg-white drop-shadow-2xl rounded-lg ${openModal ? 'translate-y-0 opacity-1 duration-300' : 'translate-y-32 opacity-0 duration-1000'}`}>
                    <main className="px-4 sm:px-6 lg:px-8 py-8">


                        <div className="space-y-8 lg:mb-6">

                            <div className="rounded-lg border bg-card  shadow-sm lg:mt-32 ">
                                <div className="flex flex-col space-y-1.5 lg:p-6 p-2">
                                    <h3 className="text-2xl font-semibold whitespace-nowrap">Blog Edit</h3>
                                </div>
                                <div className="lg:p-6 p-2 lg:w-[900px] ">
                                    {/* Personal Information details form */}
                                    <form onSubmit={handleSubmit(handleBlogEdit)} className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium leading-none">Blog Name</label>
                                                <input className="flex h-10 w-full rounded-md border px-3" placeholder="Enter your Blog Name" {...register('BlogName')} defaultValue={blog?.BlogName} />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-medium leading-none">Blog Writer Name</label>
                                                <input className="flex h-10 w-full rounded-md border px-3" placeholder="Blog Writer Name" {...register('BlogWriterName')} defaultValue={blog?.BlogWriterName} />
                                            </div>

                                        </div>


                                        <div className="space-y-2">
                                            <label className="text-sm font-medium leading-none"> Blog Details</label>
                                            <textarea className="flex h-[200px] w-full rounded-md border px-3" placeholder="Write Blog..." {...register('BlogWriting')} defaultValue={blog?.BlogWriting} />
                                        </div>




                                        <div className='lg:flex lg:gap-[620px] justify-between'>
                                            <button onClick={() => { setOpenModal(false) }} className="mr-0 mx-auto flex bg-slate-950 text-white px-3 py-2 rounded-lg mb-6" type='submit'>Submit Blog Edit</button>

                                            <button onClick={() => { setOpenModal(false) }} className="mr-0 mx-auto flex bg-slate-950 text-white px-3 py-2 rounded-lg mb-6" >Close</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>



                    </main>
                </div>
            </div>





        </div>
    );
};

export default BlogModal;