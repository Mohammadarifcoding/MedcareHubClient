import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxiosPublic from './UseAxiosPublic.tsx';

const UseBlog = () => {

   const AxiousPublic = UseAxiosPublic()


    const {data:blogsData=[],isLoading} = useQuery({
        queryKey:['blogs'],
        queryFn:async()=>{
            const result = await AxiousPublic.get('/blogs')
            return result.data
        }
    })
    return [blogsData,isLoading]
};

export default UseBlog;