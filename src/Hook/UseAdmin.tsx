import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider/AuthProvider.tsx';
import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from './UseAxiosPublic.tsx';

const UseAdmin = (): [boolean | null, boolean, unknown] => {
    const { user, load } = useContext(AuthContext);
    const axiosPublic = UseAxiosPublic();
    const { data: isAdmin, isPending: isAdminLoading, error: adminError } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !load,
        queryFn: async () => {
            try {
                const res = await axiosPublic.get(`/user/role/${user?.email}`);
                return res.data?.admin || null;
            } catch (err) {
                console.error(err);
                throw new Error('Failed to fetch data');
            }
        }
    });
    console.log(isAdmin);
    return [isAdmin, isAdminLoading, adminError];
};

export default UseAdmin;
