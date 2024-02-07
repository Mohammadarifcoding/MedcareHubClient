import moment from 'moment';
import React, { useState } from 'react';
import UseSingleBlog from '../../../Hook/UseSingleBlog.tsx';
import { AiFillLike } from "react-icons/ai";
import Swal from 'sweetalert2';
import axios from 'axios';
import { MdDelete } from "react-icons/md";

const MyBlog = () => {
    const [blogsData] = UseSingleBlog()
    const [refetchData, setRefecthData] = useState(false)
    console.log(blogsData);

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
        <div className='grid grid-cols-1 my-20 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-4 gap-10'>
            {
                blogsData?.map((blog) => (

                    <div key={blog?.ID} className="max-w-[350px] mx-auto  my-5  rounded-2xl shadow-lg">
                        <div className=" flex flex-col justify-center items-center">
                            <img className='w-full h-[210px]' src={blog.BlogPic} alt="" />
                        </div>
                        <div className='p-3'>
                            <h2 className='text-lg font-semibold'>{blog.BlogName.slice(0, 28)}...</h2>
                            <p className='mt-2'>{blog.BlogWriting[0].slice(0, 65)}....</p>
                            <div className='flex items-center gap-16'>
                                <div className='mt-4 flex gap-2'>
                                    <img className='w-12 rounded-full' src={'https://source.unsplash.com/350x350/?profile'} alt="" />
                                    <div>
                                        <h2 className='font-semibold'>{blog.BlogWriterName}</h2>
                                        <h2>{moment(blog.BlogTime).format('LL')}</h2>
                                    </div>

                                </div>

                                <AiFillLike className='text-4xl mt-4 text-[#0360D9]' />
                            </div>
                            <button className='w-full px-3 py-3 hover:bg-[#bdd8f3] rounded-lg bg-[#E1EEFF] mt-3'>Read More</button>

                            <button onClick={() => handleDeleteUser(blog)} className='text-4xl text-red-700'><MdDelete /></button>
                        </div>

                    </div>

                ))
            }

        </div>
    );
};

export default MyBlog;