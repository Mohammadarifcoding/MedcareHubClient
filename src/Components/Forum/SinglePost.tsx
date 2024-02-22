import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaRegCommentAlt } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';
import { SlDislike, SlLike } from 'react-icons/sl';
import Swal from 'sweetalert2';
import UseAuth from '../../Hook/UseAuth.tsx';
import UseAxiosPublic from '../../Hook/UseAxiosPublic.tsx';
import DisplayComment from './DisplayComment.tsx';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { CiCamera } from 'react-icons/ci';
import { MdOutlineGifBox } from 'react-icons/md';
import { PiStickerLight } from 'react-icons/pi';
import { LuSticker } from 'react-icons/lu';

interface SinglePostProps {
    data: {
        _id: string;
        name: string;
        userImg: string;
        postTag: string;
        category: string;
        comment: number;
        date: string;
        title: string;
        discription: string;
        comments: Array;
        value: string;
        like: number;
        dislike: number;
        userMail: String;
    };
}

const SinglePost = ({ data, refetch }: SinglePostProps) => {
    const { user } = UseAuth();
    const userEmail = user?.email;
    const axiosPublic = UseAxiosPublic();
    const { _id, name, date, postTag, userMail, title, discription, userImg, comments, like, dislike, category } = data;
    const [comment, setComment] = useState('');
    // const { data: reactData } = useQuery({
    //     queryKey: ['reactData'],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get(`/forum/posts/${_id}?email=${encodeURIComponent(userEmail)}`);
    //         console.log(res.data);
    //         return res.data
    //     }
    // })
    // if (reactData) {
    //     console.log(reactData, "hahahah");
    //     ({} = reactData);
    // }

    const handlAddComment = (e) => {
        e.preventDefault();
        const comment = e.target.comment.value;
        const commentInfo = {
            user: user.displayName,
            email: user.email,
            userImg: user.photoURL,
            comment
        };
        // console.log(commentInfo);
        axiosPublic.patch(`/forum/comment/${_id}`, commentInfo).then((res) => {
            // console.log(res.data, "here here");
            if (res.data) {
                setComment('');
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'comment added successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    };
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

            axiosPublic.patch(`/forum/like/dislike/${_id}`, reactInfo).then((res) => {
                console.log(res.data, 'hello res.data');
                if (!res.data.message) {
                    refetch();
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
    const handleDeletepost = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert the post!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/forum/post/delete/${id}`).then((res) => {
                    console.log(res.data);
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Your post has been deleted.',
                            icon: 'success'
                        });
                    }
                });
            }
        });
    };
    const openModal = () => {
        const modal = document.getElementById('my_modal_7') as HTMLInputElement;
        modal.checked = true;
    };
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            title: title,
            discription: discription,
            postTag: postTag,
            category: category
        }
    });

    const onSubmit: SubmitHandler = async (data) => {
        reset();
        const postItem = {
            title: data.title,
            discription: data.discription,
            postTag: data.postTag,
            category: data.category
        };
        const forumRes = await axiosPublic.post('/forum', postItem);
        if (forumRes.data) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `post has been updated!`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    const handleChange = (event) => {
        setComment(event.target.value);
    };

    return (
        <div className="md:px-8 mb-5 py-5 mx-auto rounded-2xl border shadow-sm bg-white">
            <div className="px-3 flex justify-between items-center">
                <div className="flex gap-5 items-center">
                    <div>
                        <img className="w-[50px] h-[50px] bg-slate-500 object-cover rounded-full hover:blur-[2px] duration-500" src={userImg} alt="" />
                    </div>
                    <div>
                        <h1 className="text-xl md:text-3xl font-bold ">{name}</h1>
                        <p className="text-sm md:text-lg">{date}</p>
                    </div>
                </div>
                {userEmail === userMail ? (
                    <>
                        <div className="flex items-center gap-2">
                            <button className="border-2 border-blue-500 p-2 rounded">{postTag}</button>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className="border-2 border-blue-500 p-3 rounded">
                                    <BsThreeDotsVertical />
                                </div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li onClick={openModal}>
                                        <a>Edit Post</a>
                                    </li>
                                    <li onClick={() => handleDeletepost(_id)}>
                                        <a>Delete Post</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <button
                            className="border text-sm ml-1 md:text-lg shadow-sm p-2 rounded-xl bg-gradient-to-r from-[#0360D9]  to-[#B437E3]"
                            style={{
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent',
                                backgroundColor: '#E9D7F2'
                            }}
                        >
                            {postTag}
                        </button>
                    </>
                )}
            </div>
            <div className="pt-5 px-3">
                <h1 className="text-xl md:text-2xl font-medium ">{title}</h1>
                <p className="text-lg md:text-xl font-normal pt-2">{discription}</p>
                <div className="flex justify-between items-center">
                    <div className="pt-5 flex gap-2 items-center">
                        <FaRegCommentAlt />
                        <p>{comments.length} Comments</p>
                    </div>
                    <div className="flex justify-center items-center text-center gap-5">
                        <div className="flex gap-2 items-center">
                            <button onClick={() => handleLikeDislike(1, 0, 'like')}>
                                <SlLike className="text-2xl"></SlLike>
                            </button>
                            <p className="text-xl pt-2">{like}</p>
                        </div>
                        <div className="flex gap-2 pt-3 items-center">
                            <button onClick={() => handleLikeDislike(0, 1, 'dislike')}>
                                <SlDislike className="text-2xl"></SlDislike>
                            </button>
                            <p className="text-xl pb-2"> {dislike}</p>
                        </div>
                    </div>
                </div>
                <div>
                    {comments.map((commentData) => (
                        <DisplayComment key={commentData._id} commentData={commentData} />
                    ))}
                </div>
            </div>

            <div>
                <div className="container mx-auto my-6 md:p-5 rounded">
                    {/* <h1 className="text-2xl text-center my-2">Add Your Comment</h1> */}
                    <form onSubmit={handlAddComment}>
                        <div className="md:flex gap-3 px-2 md:px-1 mb-6">
                            <div className="flex items-start gap-2 w-full">
                                {/* <label className="label"> */}
                                <div className="relative group">
                                    <img className="w-[40px] h-[40px] bg-slate-500 object-cover rounded-full" src={user?.photoURL} alt="" />
                                    <span className="h-2 w-2 bg-green-500 absolute rounded-full bottom-2 right-0 border border-white"></span>
                                    <span className="h-2 w-2 bg-green-500 absolute rounded-full bottom-2 right-0 animate-ping"></span>
                                </div>
                                {/* </label> */}
                                {/* <label className="input-group"> */}
                                <div className="relative w-full">
                                    <textarea
                                        name="comment"
                                        placeholder="Write a comment... "
                                        value={comment}
                                        onChange={handleChange}
                                        required
                                        className="textarea textarea-md w-full rounded-2xl border shadow-sm bg-[#F0F2F5] py-7 px-5"
                                    ></textarea>
                                    <div className="flex gap-2 text-xl text-gray-500 absolute bottom-5 left-5">
                                        <PiStickerLight />
                                        <HiOutlineEmojiHappy />
                                        <CiCamera />
                                        <MdOutlineGifBox />
                                        <LuSticker />
                                    </div>
                                    <button type="submit" className={`absolute bottom-5 right-6 ${comment ? 'text-blue-500' : 'text-gray-500'}`} disabled={!comment}>
                                        <IoSend className="text-xl" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <input className="btn btn-block bg-[#93C5FD] text-black" type="submit" value="Add Comment" /> */}
                    </form>
                </div>
            </div>
            <div>
                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <label className="form-control w-full">
                            <h1>Create post</h1>

                            <div className="divider"></div>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label>Title</label>
                                <input className="mt-2 mb-4 input input-bordered w-full" placeholder="Title" {...register('title')} />
                                <label>Content</label>
                                <br />
                                <textarea
                                    {...register('discription', { required: true })}
                                    className="mt-2 mb-4 w-full textarea textarea-bordered h-24"
                                    placeholder="Share or Ask Somethings to Everyone"
                                ></textarea>
                                <label className=" label">
                                    <span className="label-text">Post Tag</span>
                                </label>
                                <select {...register('postTag', { required: true })} className="mt-2 mb-4 select select-bordered">
                                    <option disabled>Post Tag</option>
                                    <option>Help Post</option>
                                    <option>Suggestion</option>
                                    <option>Dr Post</option>
                                    <option>Awareness</option>
                                </select>
                                <br />
                                <label className=" label">
                                    <span className="label-text">Category</span>
                                </label>
                                <select {...register('category', { required: true })} className="mt-2 mb-4 select select-bordered">
                                    <option disabled>Category</option>
                                    <option>dr-post</option>
                                    <option>patient-post</option>
                                </select>
                                <br />
                                <input className="btn btn-ghost" type="submit" />
                            </form>
                        </label>
                    </div>
                    <label className="modal-backdrop" htmlFor="my_modal_7">
                        Close
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SinglePost;
