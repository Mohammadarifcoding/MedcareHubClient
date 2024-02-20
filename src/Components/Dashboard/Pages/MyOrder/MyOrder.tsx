import React from 'react';
import UseAxiosPublic from '../../../../Hook/UseAxiosPublic.tsx';
import { useQuery } from '@tanstack/react-query';
import UseAuth from '../../../../Hook/UseAuth.tsx';

const MyOrder = () => {
    const axiosPublic = UseAxiosPublic()
    const { user } = UseAuth()

    const { data: orders = [], refetch } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/Orders?Email=${user?.email}`);
            return res.data;
        }
    });

    console.log(orders);
    return (
        <div>

        </div>
    );
};

export default MyOrder;