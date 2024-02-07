import React, { FC, useEffect, useState } from 'react';
import { Blog } from '../../../../Model/Model';
import moment from 'moment';
import { AiFillLike } from "react-icons/ai";
import axios from 'axios';
import { base_URL } from '../../../../utills/BaseURL.ts';
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
interface myProps {
    blog: Blog
}

const BlogItem: FC<myProps> = ({ blog }) => {
    console.log(blog)

    const [refetchData, setRefecthData] = useState(false)
    const [updateLike, setUpdateLike] = useState(
        localStorage.getItem('buttonClicked') === 'true'
    );

    useEffect(() => {
        // Update localStorage when buttonClicked state changes
        localStorage.setItem('buttonClicked', updateLike);
    }, [updateLike]);

    const handleLikeClick = () => {
        try {
            axios.patch(`${base_URL}/Blog/${blog?._id}`)
            setUpdateLike(true)

            setRefecthData(!refetchData)
        } catch (error) {

        }

    };


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

            <div className="max-w-[350px] mx-auto  my-5  rounded-2xl shadow-lg">
                <div className=" flex flex-col justify-center items-center">
                    <img className='w-full h-[210px]' src={blog.BlogPic} alt="" />
                </div>
                <div className='p-3'>
                    <h2 className='text-lg font-semibold'>{blog.BlogName.slice(0, 28)}...</h2>
                    <p className='mt-2'>{blog.BlogWriting[0].slice(0, 65)}....</p>

                    <div className='mt-4 flex gap-2'>
                        <img className='w-12 rounded-full' src={'https://source.unsplash.com/350x350/?profile'} alt="" />
                        <div>
                            <h2 className='font-semibold'>{blog.BlogWriterName}</h2>
                            <h2>{moment(blog.BlogTime).format('LL')}</h2>
                        </div>

                    </div>

                    <div className='flex  items-center justify-between mt-5'>
                        <div>
                            <button disabled={updateLike} onClick={handleLikeClick} className='flex text-3xl'>
                                <AiFillLike className='text-4xl text-[#0360D9]' />{blog?.like}
                            </button>
                        </div>

                        <div className='flex' >
                            {/* <button> <BlogModal></BlogModal></button> */}

                            <button onClick={() => handleDeleteUser(blog)} className='text-4xl text-red-700'><MdDelete /></button>
                        </div>
                    </div>



                    <button className='w-full px-3 py-3 hover:bg-[#bdd8f3] rounded-lg bg-[#E1EEFF] mt-3'>Read More</button>
                </div>

            </div>
        </div>
    );
};

export default BlogItem;