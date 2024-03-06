import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { CiUser } from 'react-icons/ci';
import { FaUserDoctor } from 'react-icons/fa6';
import { MdOutlineSick } from 'react-icons/md';
import { VscFiles } from 'react-icons/vsc';
import UseAuth from '../../Hook/UseAuth.tsx';
import UseAxiosPublic from '../../Hook/UseAxiosPublic.tsx';
import SinglePost from './SinglePost.tsx';

const PostBox = () => {
    const { user } = UseAuth();
    const userEmail = user?.email;
    const axiosPublic = UseAxiosPublic();
    const [queryType, setQueryType] = useState({ type: 'category', value: '' });
    const [activeButton, setActiveButton] = useState('');

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

    const handleButtonClick = async (type, value) => {
        setActiveButton(value);
        setQueryType({ type, value });
        await refetch();
        // Check if there are posts associated with the selected category or user
        // if (posts && posts.length > 0) {
        //     setActiveButton(value);
        // } else {
        //     setActiveButton('');
        // }
        console.log('activeButton0', activeButton);
    };

    return (
        <div>
            <div className="px-1 py-5 mx-auto">
                <div className="flex justify-center md:justify-start items-center">
                    <div>
                        <ul className="flex gap-2 flex-col md:flex-row w-full">
                            <button
                                onClick={() => handleButtonClick('category', '')}
                                className=" py-2 border-s-violet-200 rounded-2xl  bg-white flex items-center px-4 gap-2 text-[#636979] font-medium hover:bg-[#EADFF4]"
                            >
                                <VscFiles className="text-[#1F2937] text-lg" /> All Post
                            </button>
                            <button
                                onClick={() => handleButtonClick('userPost', userEmail)}
                                className="py-2 border-s-violet-200 rounded-2xl border hover:bg-[#EADFF4] shadow-sm bg-white flex items-center px-4 gap-2 text-[#636979] "
                            >
                                <CiUser className="text-[#1F2937] text-xl" /> My Post
                            </button>
                            <button
                                onClick={() => handleButtonClick('category', 'dr-post')}
                                className="py-2 border-s-violet-200 rounded-2xl border hover:bg-[#EADFF4] shadow-sm bg-white flex items-center px-4 gap-2 text-[#636979] "
                            >
                                <FaUserDoctor className="text-md text-[#1F2937]" /> Dr. Post
                            </button>
                            <button
                                onClick={() => handleButtonClick('category', 'patient-post')}
                                className="py-2 border-s-violet-200 rounded-2xl border hover:bg-[#EADFF4] shadow-sm bg-white flex items-center px-4 gap-2 text-[#636979] "
                            >
                                <MdOutlineSick className="text-lg text-[#1F2937]" /> Patient Post
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 md:gap-12 mx-auto">
                <div className="col-span-12 md:col-span-8 mt-5">
                    {posts?.map((data) => (
                        <SinglePost key={data._id} data={data} refetch={refetch} handleButtonClick={handleButtonClick}></SinglePost>
                    ))}
                </div>
                <div className="hidden md:block md:col-span-4 rounded-2xl border sticky top-10 mt-5 h-60 py-5 shadow-sm bg-white">
                    <div>
                        <div className="flex justify-center items-center w-full">
                            <ul className="flex gap-2 flex-col w-full px-5">
                                <button
                                    onClick={() => handleButtonClick('category', '')}
                                    className="py-2 rounded-2xl bg-white flex items-center px-4 gap-2 text-[#636979] font-medium hover:bg-[#dfe6f4]"
                                >
                                    <VscFiles className="text-[#1F2937] text-lg" /> All Post
                                </button>
                                <button onClick={() => handleButtonClick('userPost', userEmail)} className="py-2 rounded-2xl bg-white flex items-center px-4 gap-2 text-[#636979] hover:bg-[#dfe6f4]">
                                    <CiUser className="text-[#1F2937] text-xl" /> My Post
                                </button>
                                <button onClick={() => handleButtonClick('category', 'dr-post')} className="py-2 rounded-2xl bg-white flex items-center px-4 gap-2 text-[#636979] hover:bg-[#dfe6f4]">
                                    <FaUserDoctor className="text-md text-[#1F2937]" /> Dr. Post
                                </button>
                                <button
                                    onClick={() => handleButtonClick('category', 'patient-post')}
                                    className="py-2 rounded-2xl bg-white flex items-center px-4 gap-2 text-[#636979] hover:bg-[#dfe6f4]"
                                >
                                    <MdOutlineSick className="text-lg text-[#1F2937]" /> Patient Post
                                </button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostBox;
