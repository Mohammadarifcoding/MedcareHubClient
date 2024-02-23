import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'
import Swal from "sweetalert2";
import UseAuth from '../../Hook/UseAuth.tsx';


const PrivateRoute = ({children}) => {
    const { user, load } = UseAuth()
    const location = useLocation()
    if (load) {
        return <span className="loading loading-dots loading-lg"></span>
    }
    if (!user) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You need to log in first!",
        });
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};


export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node
}  