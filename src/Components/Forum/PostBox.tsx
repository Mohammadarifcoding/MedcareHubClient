import React, { useState } from 'react';
import SinglePost from './SinglePost.tsx';
import UseAxiosPublic from '../../Hook/UseAxiosPublic.tsx';
import { useQuery } from "@tanstack/react-query";
import UseAuth from '../../Hook/UseAuth.tsx';


const PostBox = () => {
    const { user } = UseAuth()
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
            return res?.data
        }
    })

    const handleButtonClick = (type, value) => {
        setQueryType({ type, value });
        refetch();
    }


    return (
        <div>
            <div className="px-11 py-5 mx-auto">
                <div className="flex justify-center items-center">
                    <div>
                        <ul className="flex gap-2">
                            <button onClick={() => handleButtonClick('category', '')} className="border-4 p-2 border-s-violet-200">All Post</button>
                            <button onClick={() => handleButtonClick('userPost', userEmail)} className="border-4 p-2 border-s-violet-200">My Post</button>
                            <button onClick={() => handleButtonClick('category', 'Dr-Post')} className="border-4 p-2 border-s-violet-200">Dr. Post</button>
                            <button onClick={() => handleButtonClick('category', 'patient-post')} className="border-4 p-2 border-s-violet-200">Patient Post</button>
                        </ul>
                    </div>

                </div>
            </div>
            <div>
                {
                    posts?.map(data => <SinglePost key={data._id} data={data}></SinglePost>)
                }

            </div>
        </div>
    );
};

export default PostBox;