import React from 'react';
import Container from '../../Shared/Container/Container.tsx';
import UseBlog from './../../../Hook/UseBlog.tsx';
import BlogItem from './BlogItem/BlogItem.tsx';

const Blog = () => {
    const [BlogsData, isLoading] = UseBlog()

    console.log(BlogsData)

    return (
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-4 gap-10' >
                {
                    BlogsData.map(item => <BlogItem blog={item}></BlogItem>)
                }
            </div>
        </Container>

    );
};

export default Blog;