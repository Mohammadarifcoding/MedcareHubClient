import React, { FC, useEffect, useState } from 'react';
import { Blog } from '../../../../Model/Model';
import moment from 'moment';
import { AiFillLike } from "react-icons/ai";
import axios from 'axios';
import { base_URL } from '../../../../utills/BaseURL.ts';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { SlDislike, SlLike } from 'react-icons/sl';
import UseAuth from '../../../../Hook/UseAuth.tsx';
import UseAxiosPublic from '../../../../Hook/UseAxiosPublic.tsx';
interface myProps {
    blog: Blog
}

const BlogItem: FC<myProps> = ({ blog }) => {
    // console.log(blog);
    const { user } = UseAuth();
    const axiosPublic = UseAxiosPublic();
    // console.log(blog)

    // const [refetchData, setRefecthData] = useState(false)
    // const [updateLike, setUpdateLike] = useState(
    //     localStorage.getItem('buttonClicked') === 'true'
    // );

    // useEffect(() => {
    //     // Update localStorage when buttonClicked state changes
    //     localStorage.setItem('buttonClicked', updateLike);
    // }, [updateLike]);

    // const handleLikeClick = () => {
    //     try {
    //         axios.patch(`${base_URL}/Blog/${blog?._id}`)
    //         setUpdateLike(true)

    //         setRefecthData(!refetchData)
    //     } catch (error) {

    //     }

    // };

    const handleLikeDislike = (like, dislike, userValue) => {
        // console.log(like, dislike, userValue);
        if (user) {
            const reactInfo = {
                value: {
                    like,
                    dislike
                },
                user: {
                    name: user?.displayName,
                    email: user?.email,
                    react: userValue
                }
            };

            axiosPublic.patch(`/blog/like/dislike/${blog?._id}`, reactInfo).then((res) => {
                console.log(reactInfo);
                console.log(res.data, 'hello res.data');
                if (!res.data.message) {
                    // refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your react is succfully counted',
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'You Have already participated the post react!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'login first to participated the post like or dislike.',
                showConfirmButton: false,
                timer: 1500
            });
        }
    };



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

                    <div className='mt-3'>
                        <div className="flex justify-center items-center text-center gap-5">
                            <div className="flex gap-2 items-center">
                                <button onClick={() => handleLikeDislike(1, 0, 'like')}>
                                    <SlLike className="text-2xl"></SlLike>
                                </button>
                                {/* <p className="text-xl pt-2">{like}</p> */}
                            </div>
                            <div className="flex gap-2 pt-3 items-center">
                                <button onClick={() => handleLikeDislike(0, 1, 'dislike')}>
                                    <SlDislike className="text-2xl"></SlDislike>
                                </button>
                                {/* <p className="text-xl pb-2"> {dislike}</p> */}
                            </div>
                        </div>
                    </div>


                    <Link to={`/blogdetails/${blog._id}`}>
                        <button className='w-full px-3 py-3 hover:bg-[#bdd8f3] rounded-lg bg-[#E1EEFF] mt-3'>Read More</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default BlogItem;