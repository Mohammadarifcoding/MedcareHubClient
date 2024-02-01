import React from 'react';
import { IoMdPhotos } from "react-icons/io";
import UseAuth from '../../Hook/UseAuth.tsx';
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";

enum GenderEnum {
    female = "female",
    male = "male",
    other = "other",
}

interface IFormInput {
    firstName: string
    gender: GenderEnum
}

const CreatePost = () => {
    const { user } = UseAuth();
    const openModal = (event: MouseEvent<HTMLInputElement>) => {
        const modal = document.getElementById('my_modal_7') as HTMLInputElement;
        modal.checked = true;
    }
    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
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


                    {/* <label htmlFor="my_modal_7" className="btn">open modal</label> */}
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

                            <div className="label">
                                <span className="label-text">What is your name?</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label>First Name</label>
                                <input className="input input-bordered w-full" {...register("firstName")} />
                                <label>Gender Selection</label>
                                <select {...register("gender")}>
                                    <option value="female">female</option>
                                    <option value="male">male</option>
                                    <option value="other">other</option>
                                </select>
                                <input type="submit" />
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