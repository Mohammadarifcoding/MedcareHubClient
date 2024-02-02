import React from 'react';
import { IoMdPhotos } from "react-icons/io";
import UseAuth from '../../Hook/UseAuth.tsx';
import Swal from "sweetalert2";
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import UseAxiosPublic from '../../Hook/UseAxiosPublic.tsx';

// enum GenderEnum {
//     female = "female",
//     male = "male",
//     other = "other",
// }

interface IFormInput {
    title: string,
    discription: string,
    category: string


}

const CreatePost = () => {
    let todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);
    let formattedDate = todayDate.toLocaleString('en-US');
    console.log(typeof (formattedDate));

    const axiosPublic = UseAxiosPublic()
    const { user } = UseAuth();
    console.log(user);
    const openModal = (event: MouseEvent<HTMLInputElement>) => {
        const modal = document.getElementById('my_modal_7') as HTMLInputElement;
        modal.checked = true;
    }
    const { register, handleSubmit, reset } = useForm<IFormInput>()
    // const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
    // hello hello 
    //hello hello
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {

        reset()
        const postItem = {
            name: user.displayName,
            userImg: user.photoURL,
            date: formattedDate,
            title: data.title,
            discription: data.discription,
            category: data.category,

        }
        console.log(postItem);
        const forumRes = await axiosPublic.post('/forum', postItem);
        console.log(forumRes);
        if (forumRes.data) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `post has been added!`,
                showConfirmButton: false,
                timer: 1500
            });
        }

    }

    return (
        <>
            <div className="px-11 py-5 mx-auto bg-slate-200">
                <div className="flex gap-5">
                    <div>
                        <img className="w-[50px] h-[50px] bg-slate-500 object-cover rounded-lg hover:blur-[2px] duration-500" src={user?.photoURL} alt="" />
                    </div>
                    <div className="w-full">

                        <input onClick={openModal} id="u_email" type="u_email" placeholder="Share or Ask Somethings to Everyone" className="p-3  w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />


                    </div>
                </div>
                <div className="flex justify-between pt-5">
                    <div className="flex items-center gap-2">
                        <IoMdPhotos />
                        <h1>photo/video</h1>
                    </div>



                    <button className="flex items-center gap-1 p-3 bg-blue-300 rounded" onClick={openModal}>Add post</button>
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
                                <input className="mt-2 mb-4 input input-bordered w-full" placeholder='Title' {...register("title")} />
                                <label>Content</label><br />
                                <textarea {...register("discription", { required: true })} className="mt-2 mb-4 w-full textarea textarea-bordered h-24" placeholder="Share or Ask Somethings to Everyone"></textarea>
                                <label className=' label' >
                                    <span className="label-text">Post Tag</span>
                                </label>
                                <select  {...register("category", { required: true })} className="mt-2 mb-4 select select-bordered">
                                    <option disabled value='default'>Category</option>
                                    <option>Help Post</option>
                                    <option>Suggestion</option>
                                    <option>Dr Post</option>
                                    <option>Awareness</option>
                                </select><br />
                                <input className='btn btn-ghost' type="submit" />
                            </form>

                        </label>

                    </div>
                    <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                </div>
            </div>
        </>
    );



};

export default CreatePost;