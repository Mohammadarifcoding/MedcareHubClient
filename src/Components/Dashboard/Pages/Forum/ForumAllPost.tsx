import React from 'react';
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from '../../../../Hook/UseAxiosPublic.tsx';

const ForumAllPost = () => {
    const axiosPublic = UseAxiosPublic();
    const { data: postData = [], refetch } = useQuery({
        queryKey: ['postData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/api/forum/all')
            return res.data
        }
    })
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
                    </tr>
                </thead>
                <tbody>
                    {
                        postData?.map((data, idx) => <tr key={data._id}>
                            <th>{idx + 1}</th>
                            <td>{data.name}</td>
                            <td>{data.title}</td>
                            <td>Blue</td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ForumAllPost;