import React from 'react';
import UseAxiosPublic from '../../Hook/UseAxiosPublic.tsx';
import { useQuery } from '@tanstack/react-query';
import Salesproduct from './Salesproduct.tsx';

const Sales = () => {

    const axiosPublic = UseAxiosPublic();

    const { data: orders = [], refetch } = useQuery({
      queryKey: ['orders'],
      queryFn: async () => {
          const res = await axiosPublic.get(`/Order`);
          return res.data;
      }
    });

    return (
        <div>
             {orders?.map((order) => (
          <Salesproduct order={order}></Salesproduct>
                                ))}
        </div>
    );
};

export default Sales;