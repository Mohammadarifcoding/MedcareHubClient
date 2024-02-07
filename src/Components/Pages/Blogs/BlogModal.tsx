import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEdit } from "react-icons/fa";
import Swal from 'sweetalert2';
import { base_URL } from '../../../utills/BaseURL.ts';

const BlogModal = () => {

    const [openModal, setOpenModal] = useState(false);
    const [blog, setBlog] = useState()
    const {
        register,
        handleSubmit,
    } = useForm()

    useEffect(() => {
        fetch(`${base_URL}/Blogs`)
            .then(res => res.json())
            .then(data => setBlog(data))
            .catch(error => console.error('Fetch error:', error));
    }, []);

    const handleBlogEdit = (data) => {
        console.log(data);
        const formData = {
            BlogName: data.BlogName,
            BlogWriting: data.BlogWriting,
            BlogPic: data.BlogPic,
            BlogWriterName: data.BlogWriterName,
            BlogWriterImage: data.BlogWriterImage
        };
        console.log(formData);
        // axios.put(`${base_URL}/Blogs/${data.id}`, formData)
        //     .then((res) => {
        //         console.log(res);
        //         Swal.fire("You registered for doctor successfully!");
        //         setOpenModal(false)

        //     })
        //     .catch((error) => console.error("Error updating status:", error));
    };
    return (
        <div >

            <button onClick={() => setOpenModal(true)} className=" text-4xl text-black mx-4 rounded-lg"><FaEdit /></button>
            {
                blog?.map((blogs) => (
                    <div key={blogs._id} className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} duration-300 inset-0 w-full h-full`}>
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
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium leading-none">Blog Name</label>
                                                    <input className="flex h-10 w-full rounded-md border px-3" placeholder="Enter your Blog Name" {...register('BlogName')} defaultValue={blogs?.BlogName} />
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium leading-none">Write Blog</label>
                                                        <input className="flex h-10 w-full rounded-md border px-3" placeholder="Write Blog..." {...register('BlogWriting')} defaultValue={blogs?.BlogWriting} />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium leading-none">Blog Image</label>
                                                        <input className="flex h-10 w-full rounded-md border px-3" placeholder="Enter Blog Image" {...register('BlogPic')} defaultValue={blogs?.BlogPic} />
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium leading-none">Blog Writer Name</label>
                                                        <input className="flex h-10 w-full rounded-md border px-3" placeholder="Blog Writer Name" {...register('BlogWriterName')} defaultValue={blogs?.BlogWriterName} />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium leading-none">Blog Writer Image</label>
                                                        <input className="flex h-10 w-full rounded-md border px-3" placeholder="Enter Blog Writer Image" {...register('BlogWriterImage')} defaultValue={blogs?.BlogWriterImage} />
                                                    </div>
                                                </div>


                                                <button onClick={() => { setOpenModal(false) }} className="mr-0 mx-auto flex bg-slate-950 text-white px-3 py-2 rounded-lg mb-6" type='submit'>Submit Blog Edit</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>



                            </main>
                        </div>
                    </div>
                ))
            }




        </div>
    );
};

export default BlogModal;