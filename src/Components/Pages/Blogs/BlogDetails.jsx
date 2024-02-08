import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {

    const details = useLoaderData()
    console.log(details);
    const { BlogName, BlogWriting, BlogPic, BlogWriterName } = details
    return (
        <div>

        </div>
    );
};

export default BlogDetails;