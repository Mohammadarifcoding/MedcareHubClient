import React from 'react';
import UseAxiosPublic from '../../../../Hook/UseAxiosPublic.tsx';
import { useQuery } from '@tanstack/react-query';
import AllBlogRow from './AllBlogRow.tsx';
import Swal from 'sweetalert2';

const AllBlog = () => {
    const axiosPublic = UseAxiosPublic()


    const { data: Blogs = [], refetch } = useQuery({
        queryKey: ['Blogs'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/Blogs`);
            return res.data;
        }
    });

    const handleChangeBlogStatus = (user, status) => {
        console.log(user);
        axiosPublic.patch(`blog/status/${user?._id}`, { status }).then((res) => {
            console.log(res);
            if (res.data.status) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.BlogName} is now ${status}`,
                    showConfirmButton: false,
                    timer: 1500
                });
                refetch();
            }
        });
    };

    const handleDeleteBlog = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`Blog/${user._id}`).then((res) => {
                    Swal.fire({
                        title: 'Deleted!',
                        text: 'Blog has been deleted.',
                        icon: 'success'
                    });
                    refetch();
                });
            }
        });
    };
    return (
        <>
            <div className="mt-5 ml-3 md:ml-0 md:my-5">
                <h1 className="text-2xl font-semibold">All Blog</h1>
                <p>Explore and mange All Blog effortlessly in one place.</p>
            </div>
            <div className="md:pt-0 pt-8 md:ml-4">
                <div className="overflow-x-auto w-full rounded-lg">
                    <table className="table w-full ">
                        <thead className="bg-[#fafafad5] px-6 py-3 text-center h-12 md:h-14 text-black text-sm lg:text-lg ">
                            <tr>
                                <th>Blog Name</th>
                                <th>Writer Name</th>
                                <th>Blog Details</th>
                                <th>Status</th>
                                <th className="text-center">Accept</th>
                                <th className="text-center">Reject</th>
                                <th className="text-center">Delete</th>
                            </tr>
                        </thead>

                        <tbody className="bg-base-300 ">
                            {Blogs?.map((blog) => (
                                <AllBlogRow key={blog?._id} blog={blog} handleChangeBlogStatus={handleChangeBlogStatus} handleDeleteBlog={handleDeleteBlog} ></AllBlogRow>
                            ))}

                            {/* Add more rows with user details */}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AllBlog;