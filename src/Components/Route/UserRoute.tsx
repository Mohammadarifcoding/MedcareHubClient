import React from 'react';
import { Navigate, useLocation } from 'react-router';
import UseCheckUser from '../../Hook/UseCheckUser';
import UseAuth from '../../Hook/UseAuth';

const UserRoute = () => {
    const { user, load } = UseAuth()
    const {checkUser,isloading} = UseCheckUser()
    const location = useLocation()
    let checkedUser = false
    if (load || isloading) {
        return <span className="loading loading-dots loading-lg"></span>
    }
    
    if(checkedUser === 'user'){
         checkedUser = true
    }
       
    if(user && checkedUser){
        return children;
    }


    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default UserRoute;