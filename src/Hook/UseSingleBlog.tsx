import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from './UseAxiosPublic.tsx';
import UseAuth from './UseAuth.tsx';


const UseSingleBlog = () => {
    const { user } = UseAuth()
    const AxiousPublic = UseAxiosPublic()

    const { data: blogsData = [], isLoading, refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const result = await AxiousPublic.get(`/Blogs?email=${user?.email}`)
            return result.data
        }
    })
    return { blogsData, isLoading, refetch }
};

export default UseSingleBlog;