import axios from 'axios';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoMdPhotos } from 'react-icons/io';
import Swal from 'sweetalert2';
import UseAuth from '../../Hook/UseAuth.tsx';
import UseAxiosPublic from '../../Hook/UseAxiosPublic.tsx';

// enum GenderEnum {
//     female = "female",
//     male = "male",
//     other = "other",
// }

interface IFormInput {
    title: string;
    discription: string;
    postTag: string;
    category: string;
}
const image_hosting_key = '140f2d0db1502e65c2c0ee7bfc66be98';
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const CreatePost = () => {
    let todayDate = new Date();
    let formattedDate = todayDate.toLocaleString('en-US');
    // console.log(formattedDate);

    const axiosPublic = UseAxiosPublic();
    const { user } = UseAuth();
    // console.log(user);
    const openModal = (event: MouseEvent<HTMLInputElement>) => {
        const modal = document.getElementById('my_modal_7') as HTMLInputElement;
        modal.checked = true;
    };

    const { register, handleSubmit, reset } = useForm<IFormInput>();
    // const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        reset();
        const postItem = {
            name: user?.displayName,
            userMail: user.email,
            userImg: user.photoURL,
            date: formattedDate,
            title: data.title,
            discription: data.discription,
            postTag: data.postTag,
            category: data.category,
        };
        // console.log(postItem);
        const forumRes = await axiosPublic.post('/forum', postItem);
        // console.log(forumRes);
        if (forumRes.data) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `post has been added!`,
                showConfirmButton: false,
                timer: 1500
            });
            const modal = document.getElementById('my_modal_7') as HTMLInputElement;
            modal.checked = false;
        }
    };

    return (
        <>
            <div className="px-2 md:px-8 py-5 mx-auto rounded-2xl border shadow-sm bg-white">
                <div className="flex gap-5 items-center">
                    <div>
                        <img className="w-[60px] h-[50px] md:w-[80px] md:h-[70px] bg-slate-500 object-cover rounded-full " src={user?.photoURL} alt="" />
                    </div>
                    <div className="w-full">
                        <input
                            onClick={openModal}
                            id="u_email"
                            type="u_email"
                            placeholder="Share or Ask Somethings to Everyone"
                            className="p-3  w-full outline-none bg-[#F3F4F6] placeholder:text-[#57616e] rounded-full "
                        />
                    </div>
                </div>
                <div className="flex justify-between items-center pl-5 pt-2 pb-3">
                    <div className="flex items-center gap-2 ">
                        <IoMdPhotos className="text-xl text-[#0360D9]" />
                        <h1>Photo/Video</h1>
                    </div>

                    <button className="flex items-center text-sm md:text-lg gap-1 px-3 py-2 bg-gradient-to-r from-[#0360D9] to-[#A5CCFF] text-white rounded-xl" onClick={openModal}>
                        Create post
                    </button>
                </div>
            </div>
            <div>
                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <h1>Create post</h1>

                        <div className="divider"></div>
                        <label className="form-control w-full">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label>Title</label>
                                <input className="mt-2 mb-4 input input-bordered w-full" placeholder="Title" {...register('title')} />
                                <div className="flex justify-evenly gap-4">
                                    <div className=" w-full">
                                        <label className=" label">
                                            <span className="label-text">Post Tag</span>
                                        </label>
                                        <select {...register('postTag', { required: true })} className="mt-2 mb-4 select select-bordered w-full">
                                            <option disabled value="default">
                                                Post Tag
                                            </option>
                                            <option>Help Post</option>
                                            <option>Suggestion</option>
                                            <option>Dr Post</option>
                                            <option>Awareness</option>
                                        </select>
                                    </div>
                                    <div className=" w-full">
                                        <label className=" label">
                                            <span className="label-text">Category</span>
                                        </label>
                                        <select {...register('category', { required: true })} className="mt-2 mb-4 select select-bordered  w-full">
                                            <option disabled value="default">
                                                Category
                                            </option>
                                            <option>dr-post</option>
                                            <option>patient-post</option>
                                        </select>
                                    </div>
                                </div>
                                <label>Content</label>
                                <br />
                                <textarea
                                    {...register('discription', { required: true })}
                                    className="mt-2 mb-4 w-full textarea textarea-bordered h-24"
                                    placeholder="Share or Ask Somethings to Everyone"
                                ></textarea>
                                <div className="flex justify-between">
                                    <label htmlFor="file" className="flex justify-between items-center font-light p-2 rounded text-[15px] hover:bg-gray-50 cursor-pointer">
                                        <button className="flex items-center gap-2">
                                            <IoMdPhotos className="text-xl text-[#0360D9]" />
                                            <h1>Photo/Video</h1>
                                        </button>
                                        <input id="file" type="file" style={{ display: 'none' }} />
                                    </label>

                                    <button className="flex items-center text-sm md:text-md gap-1 px-3 py-2 bg-gradient-to-r from-[#0360D9] to-[#A5CCFF] text-white rounded-xl" type="submit">
                                        Submit Post
                                    </button>
                                </div>
                            </form>
                        </label>
                    </div>
                    <label className="modal-backdrop" htmlFor="my_modal_7">
                        Close
                    </label>
                </div>
            </div>
        </>
    );
};

export default CreatePost;
