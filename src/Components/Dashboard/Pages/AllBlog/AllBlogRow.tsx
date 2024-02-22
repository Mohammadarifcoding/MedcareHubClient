import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { TiTickOutline } from 'react-icons/ti';
import { RxCross2 } from "react-icons/rx";

const AllBlogRow = ({ blog, handleDeleteBlog, handleChangeBlogStatus }) => {
    const { BlogName, BlogWriterName, BlogWriting, status } = blog
    console.log(blog);
    return (
        <tr className='bg-[#FFFFFF] hover:bg-[#fafafa7e]'>
            <td className="border-t px-6 py-4  ">{BlogWriterName}</td>
            <td className="border-t px-6 py-4 text-center  ">{BlogName} </td>
            <td className="border-t px-6 py-4 text-center">
                {BlogWriting[0].slice(0, 40)}
                <br />
                {BlogWriting[0].slice(41, 80)}...
            </td>


            <td className="px-6 py-4 border-t text-center">
                <button className="text-white btn btn-ghost  hover:bg-[#393E46] bg-[#0360D9] hover:text-red-800">
                    {status}
                </button>
            </td>
            <td className="px-6 py-4 border-t text-center">
                <button onClick={() => handleChangeBlogStatus(blog, "Accepted")} className="text-2xl flex justify-center flex-col md:flex-row gap-5 text-blue-700 lg:ml-11" >
                    <TiTickOutline />
                </button>
            </td>

            <td className="px-6 py-4 border-t text-center">
                <button onClick={() => handleChangeBlogStatus(blog, "Rejected")} className="text-2xl flex justify-center flex-col md:flex-row gap-5 text-red-700  lg:ml-11"  >
                    <RxCross2 />
                </button>
            </td>

            <td className="px-6 py-4 border-t text-center">
                <button onClick={() => handleDeleteBlog(blog)} className="text-2xl flex justify-center flex-col md:flex-row gap-5 text-red-700  lg:ml-11"  >
                    <AiOutlineDelete />
                </button>
            </td>

        </tr>
    );
};

export default AllBlogRow;