import React from 'react';
import UseAuth from '../../Hook/UseAuth.tsx';
import UseCheckUser from '../../Hook/UseCheckUser.tsx';
import { Navigate, useLocation } from 'react-router';

const AdminRoute = () => {
    const { user, load } = UseAuth()
    const {checkUser,isloading} = UseCheckUser()
    const location = useLocation()
    let checkedUser = false
    if (load || isloading) {
        return <span className="loading loading-dots loading-lg"></span>
    }
    
    if(checkedUser === 'Admin' || checkUser === 'Super'){
         checkedUser = true
    }
       
    if(user && checkedUser){
        return children;
    }


    return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;