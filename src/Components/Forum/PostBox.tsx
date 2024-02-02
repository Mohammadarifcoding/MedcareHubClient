import React, { useEffect, useState } from 'react';
import SinglePost from './SinglePost.tsx';
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
    const [post, setPost] = useState<PostData[]>([]);
    useEffect(() => {
        fetch('http://localhost:5000/forum')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    return (
        <div>
            {
                post.map(data => <SinglePost key={data._id} data={data}></SinglePost>)
            }
        </div>
    );
};

export default PostBox;