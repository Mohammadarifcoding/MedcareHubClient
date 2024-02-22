import React, { useState } from 'react';
import SinglePost from './SinglePost.tsx';
import UseAxiosPublic from '../../Hook/UseAxiosPublic.tsx';
import { useQuery } from '@tanstack/react-query';
import UseAuth from '../../Hook/UseAuth.tsx';
import { VscFiles } from "react-icons/vsc";


const PostBox = () => {
    const { user } = UseAuth();
    const userEmail = user?.email;
    const axiosPublic = UseAxiosPublic();
    const [queryType, setQueryType] = useState({ type: 'category', value: '' });

    const { data: posts, refetch } = useQuery({
        queryKey: [queryType.type, queryType.value],
        queryFn: async () => {
            let res;
            if (queryType.type === 'category') {
                res = await axiosPublic.get(`/forum/${queryType.value}`);
            } else if (queryType.type === 'userPost') {
                res = await axiosPublic.get(`/api/forum/${queryType.value}`);
            }
            return res?.data;
        }
    });

    const handleButtonClick = (type, value) => {
        setQueryType({ type, value });
        refetch();
    };

    return (
        <div>
            <div className="px-11 py-5 mx-auto ">
                <div className="flex justify-center items-center">
                    <div>
                        <ul className="flex gap-2">
                            <button onClick={() => handleButtonClick('category', '')} className=" p-2 border-s-violet-200 rounded-2xl border shadow-sm bg-white flex items-center gap-2">
                            <VscFiles />  All Post
                            </button>
                            <button onClick={() => handleButtonClick('userPost', userEmail)} className="p-2 border-s-violet-200 rounded-2xl border shadow-sm bg-white">
                                My Post
                            </button>
                            <button onClick={() => handleButtonClick('category', 'dr-post')} className="p-2 border-s-violet-200 rounded-2xl border shadow-sm bg-white">
                                Dr. Post
                            </button>
                            <button onClick={() => handleButtonClick('category', 'patient-post')} className="p-2 border-s-violet-200 rounded-2xl border shadow-sm bg-white">
                                Patient Post
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                {posts?.map((data) => (
                    <SinglePost key={data._id} data={data} refetch={refetch}></SinglePost>
                ))}
            </div>
        </div>
    );
};

export default PostBox;
