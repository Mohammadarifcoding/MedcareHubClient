import React, { useState } from 'react';
import Container from '../../Shared/Container/Container.tsx';
import UseBlog from './../../../Hook/UseBlog.tsx';
import BlogItem from './BlogItem/BlogItem.tsx';
import Modal from './Modal.tsx';

const Blog = () => {
    const [BlogsData, setBlogsData] = UseBlog()
    const [isLoading, setIsLoading] = useState()

    console.log(BlogsData)







    return (
        <Container>

            <div className="w-72 mx-auto flex items-center justify-center">
                <Modal></Modal>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-4 gap-10' >
                {
                    BlogsData.map(item => <BlogItem blog={item}></BlogItem>)
                }
            </div>
        </Container>

    );
};

export default Blog;