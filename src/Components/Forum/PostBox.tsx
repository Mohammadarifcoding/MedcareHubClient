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
    post_body: string;
}


const PostBox = () => {
    const [post, setPost] = useState<PostData[]>([]);
    useEffect(() => {
        fetch('post.json')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    return (
        <div>
            {
                post.map(data => <SinglePost key={data.id} data={data}></SinglePost>)
            }
        </div>
    );
};

export default PostBox;