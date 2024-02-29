import React from 'react';
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from '../../../../Hook/UseAxiosPublic.tsx';
import { FcApprove, FcDisapprove } from "react-icons/fc";
import Swal from 'sweetalert2';
import { MdOutlineAutoDelete } from 'react-icons/md';
import UseAuth from '../../../../Hook/UseAuth.tsx';

const ForumAllPost = () => {
    const { user } = UseAuth()
    const axiosPublic = UseAxiosPublic();
    const { data: postData = [], refetch } = useQuery({
        queryKey: ['postData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/api/forum/all')
            return res.data
        }
    })

    const handleChangeStatus = (id, status) => {
        axiosPublic.patch(`/forum/update/status/${id}`, { status })
            .then(res => {
                if (res.data) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `post is ${status}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            })

    }
    const handleDeletePost = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/forum/post/delete/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your post has been deleted.",
                                icon: "success"

                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Post Owner</th>
                        <th>Title</th>
                        <th>Status</th>
                        {user && (user.role === 'Admin' || user.role === 'Super') && (
                            <>
                                <th>Approved</th>
                                <th>Rejected</th>
                            </>
                        )}
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        postData?.map((data, idx) => <tr key={data._id}>
                            <th>{idx + 1}</th>
                            <td>{data.name}</td>
                            <td>{data.title}</td>
                            <td>{data.status}</td>
                            {
                                user && (user.role === 'Admin' || user.role === 'Super') && (
                                    <>
                                     <td>
                                <button onClick={() => handleChangeStatus(data._id, 'Approved')}>
                                    <FcApprove className='text-4xl'></FcApprove>
                                </button>
                            </td>
                            <td>
                                <button onClick={() => handleChangeStatus(data._id, 'Rejected')}>
                                    <FcDisapprove className='text-4xl'></FcDisapprove>
                                </button>
                            </td>
                                    </>
                                )
                            }
                           
                            <td>
                                <button onClick={() => handleDeletePost(data._id)}>
                                    <MdOutlineAutoDelete className='text-4xl'></MdOutlineAutoDelete>
                                </button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ForumAllPost;