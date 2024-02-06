import React from 'react';
import { FaRegCommentAlt } from "react-icons/fa";

interface SinglePostProps {
    data: {
        name: string;
        userImg: string;
        postTag: string;
        category: string;
        comment: number;
        date: string;
        title: string;
        discription: string;
    }
}

const SinglePost = ({ data }: SinglePostProps) => {
    const { name, date, postTag, title, discription, userImg } = data;
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
                <div className="pt-5 flex gap-2 items-center">
                    <FaRegCommentAlt />
                    <p>comment</p>
                </div>
            </div>
        </div>
    );
};

export default SinglePost;
