import React, { FC } from 'react';
import { Blog } from '../../../../Model/Model';
import moment from 'moment';

interface myProps {
    blog: Blog
}

const BlogItem: FC<myProps> = ({ blog }) => {
    console.log(blog)
    return (
        <div className="max-w-[350px] mx-auto  my-5  rounded-2xl shadow-lg">
            <div className=" flex flex-col justify-center items-center">
                <img className='w-full h-[210px]' src={blog.BlogPic} alt="" />
            </div>
            <div className='p-3'>
                <h2 className='text-lg font-semibold'>{blog.BlogName.slice(0, 28)}...</h2>
                <p className='mt-2'>{blog.BlogWriting[0].slice(0, 65)}....</p>
                <div className='mt-4 flex gap-2 '>
                    <img className='w-12 rounded-full' src={'https://source.unsplash.com/350x350/?profile'} alt="" />
                    <div>
                        <h2 className='font-semibold'>{blog.BlogWriterName}</h2>
                        <h2>{moment(blog.BlogTime).format('LL')}</h2>
                    </div>
                </div>
                <button className='w-full px-3 py-3 hover:bg-[#bdd8f3] rounded-lg bg-[#E1EEFF] mt-3'>Read More</button>
            </div>

        </div>
    );
};

export default BlogItem;