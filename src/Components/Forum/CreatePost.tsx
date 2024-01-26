import React from 'react';
import { IoMdPhotos } from "react-icons/io";

const CreatePost = () => {
    return (
        <div className="px-11 py-5 mx-auto bg-slate-200">
            <div className="flex gap-5">
                <div>
                    <img className="w-[50px] h-[50px] bg-slate-500 object-cover rounded-lg hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?profile" alt="" />
                </div>
                <div className="w-full">

                    <input id="u_email" type="u_email" placeholder="Share or Ask Somethings to Everyone" className="p-3  w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                </div>
            </div>
            <div className="flex justify-between pt-5">
                <div className="flex items-center gap-2">
                    <IoMdPhotos />
                    <h1>photo/video</h1>
                </div>

                <button className="bg-blue-300 p-3 rounded">Add post</button>
            </div>
        </div>
    );
};

export default CreatePost;