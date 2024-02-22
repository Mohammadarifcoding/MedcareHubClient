import React, { useState } from 'react';
import SinglePost from './SinglePost.tsx';
import UseAxiosPublic from '../../Hook/UseAxiosPublic.tsx';
import { useQuery } from '@tanstack/react-query';
import UseAuth from '../../Hook/UseAuth.tsx';
import { VscFiles } from 'react-icons/vsc';
import { CiUser } from 'react-icons/ci';
import { FaUserDoctor } from 'react-icons/fa6';
import { MdOutlineSick } from 'react-icons/md';

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
            <div className="px-1 py-5 mx-auto ">
                <div className="flex justify-center md:justify-start items-center">
                    <div>
                        <ul className="flex gap-2 flex-col md:flex-row">
                            <button
                                onClick={() => handleButtonClick('category', '')}
                                className=" py-2 border-s-violet-200 rounded-2xl border shadow-sm bg-white flex items-center px-4 gap-2 text-[#636979] font-medium"
                            >
                                <VscFiles className="text-[#1F2937] text-lg" /> All Post
                            </button>
                            <button
                                onClick={() => handleButtonClick('userPost', userEmail)}
                                className="py-2 border-s-violet-200 rounded-2xl border shadow-sm bg-white flex items-center px-4 gap-2 text-[#636979] "
                            >
                                <CiUser className="text-[#1F2937] text-xl" /> My Post
                            </button>
                            <button
                                onClick={() => handleButtonClick('category', 'dr-post')}
                                className="py-2 border-s-violet-200 rounded-2xl border shadow-sm bg-white flex items-center px-4 gap-2 text-[#636979] "
                            >
                                <FaUserDoctor className="text-md text-[#1F2937]" /> Dr. Post
                            </button>
                            <button
                                onClick={() => handleButtonClick('category', 'patient-post')}
                                className="py-2 border-s-violet-200 rounded-2xl border shadow-sm bg-white flex items-center px-4 gap-2 text-[#636979] "
                            >
                                <MdOutlineSick className="text-lg text-[#1F2937]" /> Patient Post
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
