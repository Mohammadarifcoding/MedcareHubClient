import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UseBlog from '../../../Hook/UseBlog.tsx';

const BlogDetails = () => {

    const details = useLoaderData()
    console.log(details);
    const { BlogName, BlogWriting, BlogPic, BlogWriterName, BlogTime } = details
    const [BlogsData] = UseBlog()
    console.log(BlogsData);
    return (
        <div>
            <div className="max-w-7xl mx-auto my-8 px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="col-span-2">
                        <h1 className="text-3xl font-bold mb-4">Tech is growing</h1>
                        <img
                            src={BlogPic}
                            alt="Tech is growing"
                            className="mb-4"
                            width="640"
                            height="400"

                        />
                        <div className="text-sm mb-4">
                            <p className="font-semibold">Author:{BlogWriterName}</p>
                            <p>{BlogTime}</p>
                        </div>
                        <h2 className="text-xl font-semibold mb-2">{BlogName}</h2>
                        <p>
                            {BlogWriting}
                        </p>
                    </div>
                    <div className="md:col-span-1">
                        {
                            BlogsData?.slice(0, 2)?.map((blogs) => (
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Recent news</h2>
                                    <div className="mb-4">
                                        <img
                                            src={blogs?.BlogPic}
                                            alt="Recent news"
                                            className="mb-2"
                                            width="320"
                                            height="200"

                                        />
                                        <h3 className="text-lg font-semibold mb-1">{blogs?.BlogName}</h3>
                                        <p className="text-sm"> {BlogWriting && BlogWriting[0].slice(0, 200)}...</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div >
    );
};

export default BlogDetails;