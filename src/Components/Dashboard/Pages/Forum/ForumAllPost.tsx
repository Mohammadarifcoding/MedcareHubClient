import React from 'react';
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from '../../../../Hook/UseAxiosPublic.tsx';
import { FcApprove } from "react-icons/fc";
import Swal from 'sweetalert2';

const ForumAllPost = () => {
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
                        title: `is now admin`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            })

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
                        <th>Approved</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        postData?.map((data, idx) => <tr key={data._id}>
                            <th>{idx + 1}</th>
                            <td>{data.name}</td>
                            <td>{data.title}</td>
                            <td>{data.status}</td>
                            <td>
                                <button onClick={() => handleChangeStatus(data._id, 'Approved')}>
                                    <FcApprove className='text-4xl'></FcApprove>
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