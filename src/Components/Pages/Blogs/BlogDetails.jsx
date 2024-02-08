import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {

    const details = useLoaderData()
    console.log(details);
    const { BlogName, BlogWriting, BlogPic, BlogWriterName, BlogTime } = details
    return (
        <div className="container mx-auto py-8">
            {/* Header */}
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold">{BlogName}</h1>
            </header>

            {/* Main Content */}
            <div className="grid grid-cols-1  gap-8">
                {/* Blog Image */}
                <div>
                    <img src={BlogPic} alt={BlogName} className="w-[600px] mx-auto h-[500px] rounded-lg" />
                    <p>{BlogTime}</p>
                </div>

                {/* Blog Content */}
                <div>
                    <p className="text-gray-500 text-xl font-medium"> Blog Written by {BlogWriterName}</p>
                    <p className="text-lg text-gray-700">{BlogWriting}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;