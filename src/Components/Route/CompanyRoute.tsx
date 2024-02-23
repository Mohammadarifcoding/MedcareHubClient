import React from 'react';
import { Navigate, useLocation } from 'react-router';
import UseCheckUser from '../../Hook/UseCheckUser.tsx';
import UseAuth from '../../Hook/UseAuth.tsx';

const CompanyRoute = ({children}) => {
    const { user, load } = UseAuth()
    const {checkUser,isloading} = UseCheckUser()
    const location = useLocation()
    let checkedUser = false
    if (load || isloading) {
        return <span className="loading loading-dots loading-lg"></span>
    }
    
    if(checkedUser === 'Company'){
         checkedUser = true
    }
       
    if(user && checkedUser){
        return children;
    }


    return <Navigate to="/" state={{ from: location }} replace />;
};

export default CompanyRoute;