import React, { useState } from 'react';
import Container from '../../Shared/Container/Container.tsx';
import UseBlog from './../../../Hook/UseBlog.tsx';
import BlogItem from './BlogItem/BlogItem.tsx';
import WriteBlogModal from './WriteBlogModal.tsx';

const Blog = () => {
    const [BlogsData, setBlogsData] = UseBlog()
    const [isLoading, setIsLoading] = useState()
 

  



    return (
        <Container>

            <WriteBlogModal></WriteBlogModal>

            <div className='grid grid-cols-1 my-20 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-4 gap-10' >
                {
                    isLoading && [1, 2, 3, 4, 5, 6, 7, 8].map(item =>
                        <div className=" p-6 rounded-md shadow-md mx-auto max-w-fit">
                            <div className="animate-pulse">
                                {/* Product Image Skeleton */}
                                <div className="w-[300px] lg:h-52 md:h-52 h-48 rounded-lg bg-gray-300 mb-6"></div>
                                {/* Product Title Skeleton */}
                                <div className="w-[290px] h-4 rounded-lg bg-gray-300 mb-4"></div>
                                {/* product heading skeleton */}
                                <div className="w-[220px] h-4 rounded-lg bg-gray-300 mb-4"></div>
                                {/* Product Description Skeleton */}
                                <div className="w-[200px] h-4 rounded-lg bg-gray-300 mb-4"></div>
                            </div>
                        </div>
                    )
                }
                {
                    BlogsData.map(item => <BlogItem blog={item}></BlogItem>)
                }
            </div>
        </Container>

    );
};

export default Blog;