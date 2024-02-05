import React, { useEffect, useState } from 'react';
import SinglePost from './SinglePost.tsx';
import UseAxiosPublic from '../../Hook/UseAxiosPublic.tsx';
import { useQuery } from "@tanstack/react-query";
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
    // const [post, setPost] = useState<PostData[]>([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/forum')
    //         .then(res => res.json())
    //         .then(data => setPost(data))
    // }, [])
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
            {
                post?.map(data => <SinglePost key={data._id} data={data}></SinglePost>)
            }
        </div>
    );
};

export default PostBox;