import React from 'react';
import { FaRegCommentAlt } from "react-icons/fa";

interface SinglePostProps {
    data: {
        name: string;
        img: string;
        tag: string;
        comment: number;
        date: string;
        heading: string;
        post_body: string;
    }
}

const SinglePost = ({ data }: SinglePostProps) => {
    const { name, img, tag, comment, date, heading, post_body } = data;
    return (
        <div className="bg-slate-200 p-5 my-5">
            <div className="flex justify-between items-center">
                <div className="flex gap-5 items-center">
                    <div >
                        <img className="w-[50px] h-[50px] bg-slate-500 object-cover rounded-lg hover:blur-[2px] duration-500" src={img} alt="" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold ">{name}</h1>
                        <p>{date}</p>
                    </div>

                </div>
                <button className="border-2 border-blue-500 p-2 rounded">{tag}</button>
            </div>
            <div className="pt-5">
                <h1 className="text-2xl font-medium ">{heading}</h1>
                <p className="text-xl font-normal pt-2">{post_body}</p>
                <div className="pt-5 flex gap-2 items-center">
                    <FaRegCommentAlt />
                    <p>{comment}comment</p>
                </div>
            </div>
        </div>
    );
};

export default SinglePost;
