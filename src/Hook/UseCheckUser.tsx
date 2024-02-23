import React from 'react';
import UseAxiosPublic from './UseAxiosPublic.tsx';
import UseAuth from './UseAuth.tsx';
import { useQuery } from '@tanstack/react-query';

const UseCheckUser = () => {
    const Axious = UseAxiosPublic()
    const {user} = UseAuth()
    

    // checking by api
    const {data:userRolename = '',isPending,isLoading} = useQuery({
      queryKey:['checkingUser'],
      queryFn : async()=>{
        const getUserRole = await Axious.get(`/checkAcess/${user.email}`)
        return getUserRole.data
      }
    })
    return [userRolename,isLoading,isPending]
};

export default UseCheckUser;