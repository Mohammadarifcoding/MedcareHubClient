import React from 'react';
import { FaRegCommentAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import UseAxiosPublic from '../../Hook/UseAxiosPublic.tsx';
import UseAuth from '../../Hook/UseAuth.tsx';
import DisplayComment from './DisplayComment.tsx';
import { SlLike, SlDislike } from 'react-icons/sl';
import { useQuery } from '@tanstack/react-query';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useForm, SubmitHandler } from 'react-hook-form';

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

    return (
        <div className="px-8 py-5 mx-auto rounded-2xl border shadow-sm bg-white">
            <div className="flex justify-between items-center">
                <div className="flex gap-5 items-center">
                    <div>
                        <img className="w-[50px] h-[50px] bg-slate-500 object-cover rounded-full hover:blur-[2px] duration-500" src={userImg} alt="" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold ">{name}</h1>
                        <p>{date}</p>
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
                            className="border shadow-sm p-2 rounded-xl bg-gradient-to-r from-[#0360D9]  to-[#B437E3]"
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
            <div className="pt-5">
                <h1 className="text-2xl font-medium ">{title}</h1>
                <p className="text-xl font-normal pt-2">{discription}</p>
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
                <div className="container mx-auto my-6 bg-[#F6F6F6] p-5 rounded">
                    <h1 className="text-2xl text-center my-2">Add Your Comment</h1>
                    <form onSubmit={handlAddComment}>
                        <div className="md:flex gap-3 px-2 md:px-1 mb-6">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Comment</span>
                                </label>
                                <label className="input-group">
                                    <textarea name="comment" placeholder="Write your comment here" required className="textarea textarea-bordered textarea-xs w-full"></textarea>
                                </label>
                            </div>
                        </div>
                        <input className="btn btn-block bg-[#93C5FD] text-black" type="submit" value="Add Comment" />
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
