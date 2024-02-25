import React from 'react';
import { Navigate, useLocation } from 'react-router';
import UseAuth from '../../Hook/UseAuth.tsx';
import UseCheckUser from '../../Hook/UseCheckUser.tsx';

const CompanyRoute = ({ children }) => {
    const { user, load } = UseAuth()
    const [checkUser, isloading] = UseCheckUser()
    const location = useLocation()
    let checkedUser = false
    if (load || isloading) {
        return <span className="loading loading-dots loading-lg"></span>
    }

    if (checkUser === 'Company' || checkUser === 'Super') {
        checkedUser = true
    }
    console.log(checkedUser)
    if (user && checkedUser) {
        return children;
    }


    return <Navigate to="/" state={{ from: location }} replace />;
};

export default CompanyRoute;