import { React, useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider/AuthProvider.tsx';
import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from './UseAxiosPublic.tsx';

const UseAdmin = () => {
    const { user, load } = useContext(AuthContext)
    console.log(user);
    const axiosPublic = UseAxiosPublic();
    const { data: isAdmin, isPending: isAdminLoading, error: adminError } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !load,
        queryFn: async () => {
            try {
                const res = await axiosPublic.get(`/user/role/${user?.email}`)
                // console.log(res.data);
                return res.data?.admin || null;
            } catch (err) {
                console.error(err);
                throw new Error('Failed to fetch data');
            }
        }
    })
    return [isAdmin, isAdminLoading, adminError]
};

export default UseAdmin;