import React, { useEffect, useState } from 'react';
import SinglePost from './SinglePost.tsx';
import UseAxiosPublic from '../../Hook/UseAxiosPublic.tsx';
import { useQuery } from "@tanstack/react-query";
import { FaSearch } from "react-icons/fa";
interface PostData {
    id: number;
    name: string;
    img: string;
    tag: string;
    comment: number;
    date: string;
    heading: string;
    discription: string;
}


const PostBox = () => {
    const axiosPublic = UseAxiosPublic();
    const { data: post, refetch } = useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            const res = await axiosPublic.get('/forum');
            // console.log(res.data);
            return res?.data
        }
    })
    return (
        <div>
            <div className="px-11 py-5 mx-auto">
                <div className="flex justify-center items-center">
                    <div>
                        <ul className="flex gap-2">
                            <button className="border-4 p-2 border-s-violet-200">All Post</button>
                            <button className="border-4 p-2 border-s-violet-200">My Post</button>
                            <button className="border-4 p-2 border-s-violet-200">Dr. Post</button>
                            <button className="border-4 p-2 border-s-violet-200">Patient Post</button>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                {
                    post?.map(data => <SinglePost key={data._id} data={data}></SinglePost>)
                }
            </div>
        </div>
    );
};

export default PostBox;