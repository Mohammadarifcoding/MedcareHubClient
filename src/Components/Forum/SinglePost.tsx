import React from 'react';
import { FaRegCommentAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxiosPublic from '../../Hook/UseAxiosPublic.tsx';
import UseAuth from '../../Hook/UseAuth.tsx';
import DisplayComment from './DisplayComment.tsx';
import { SlLike, SlDislike } from "react-icons/sl";
import { useQuery } from '@tanstack/react-query';

interface SinglePostProps {
    data: {
        _id: string,
        name: string,
        userImg: string,
        postTag: string;
        category: string,
        comment: number;
        date: string;
        title: string;
        discription: string,
        comments: Array,
        value: string,
        like: number,
        dislike: number
    }
}

const SinglePost = ({ data, refetch }: SinglePostProps) => {
    const { user } = UseAuth();
    // const userEmail = user?.email;
    const axiosPublic = UseAxiosPublic();
    const { _id, name, date, postTag, title, discription, userImg, comments, like, dislike } = data;

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

    const handlAddComment = e => {
        e.preventDefault()
        const comment = e.target.comment.value;
        const commentInfo = {
            user: user.displayName,
            email: user.email,
            userImg: user.photoURL,
            comment
        }
        // console.log(commentInfo);
        axiosPublic.patch(`/forum/comment/${_id}`, commentInfo)
            .then(res => {
                // console.log(res.data, "here here");
                if (res.data) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "comment added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    const handleLikeDislike = (like, dislike, userValue) => {
        // console.log(like, dislike, userValue);
        if (user) {
            const reactInfo = {
                value: {
                    like,
                    dislike,
                },
                user: {
                    name: user?.displayName,
                    email: user?.email,
                    react: userValue
                }
            }

            axiosPublic.patch(`/forum/like/dislike/${_id}`, reactInfo)
                .then(res => {
                    console.log(res.data);
                    if (res.data.like) {
                        refetch()
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your react is succfully counted",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    } else {
                        Swal.fire({
                            position: "top-end",
                            icon: "error",
                            title: "You Have already participated the post react!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        } else {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "login first to participated the post like or dislike.",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }



    return (
        <div className="bg-slate-200 p-5 my-5">
            <div className="flex justify-between items-center">
                <div className="flex gap-5 items-center">
                    <div >
                        <img className="w-[50px] h-[50px] bg-slate-500 object-cover rounded-lg hover:blur-[2px] duration-500" src={userImg} alt="" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold ">{name}</h1>
                        <p>{date}</p>
                    </div>

                </div>
                <button className="border-2 border-blue-500 p-2 rounded">{postTag}</button>
            </div>
            <div className="pt-5">
                <h1 className="text-2xl font-medium ">{title}</h1>
                <p className="text-xl font-normal pt-2">{discription}</p>
                <div className='flex justify-between items-center'>
                    <div className="pt-5 flex gap-2 items-center">
                        <FaRegCommentAlt />
                        <p>{comments.length} Comments</p>
                    </div>
                    <div className="flex justify-center gap-5">
                        <div>
                            <button onClick={() => handleLikeDislike(1, 0, 'like')}><SlLike className="text-3xl"></SlLike></button>
                            <p className="text-xl">Like: {like}</p>
                        </div>
                        <div>
                            <button onClick={() => handleLikeDislike(0, 1, 'dislike')}><SlDislike className="text-3xl"></SlDislike></button>
                            <p className="text-xl">Dislike: {dislike}</p>
                        </div>
                    </div>
                </div>
                <div>

                    {comments.map(commentData => <DisplayComment key={commentData._id} commentData={commentData} />)}
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
                                    <textarea name="comment" placeholder="Write your comment here" required className="textarea textarea-bordered textarea-xs w-full" ></textarea>
                                </label>
                            </div>
                        </div>
                        <input className="btn btn-block bg-[#93C5FD] text-black" type="submit" value="Add Comment" />

                    </form>

                </div>
            </div>
        </div>
    );
};

export default SinglePost;
