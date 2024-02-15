import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import UseAuth from '../../Hook/UseAuth.tsx';
import UseAdmin from '../../Hook/UseAdmin.tsx';

interface AdminRouteProps {
    children: ReactNode;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
    const { user, load } = UseAuth();

    const [isAdmin, isAdminLoading] = UseAdmin();
    const location = useLocation()

    if (load || isAdminLoading) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    if (user && isAdmin) {
        return <>{children}</>;
    }
    return <Navigate state={{ from: location }} to='/'></Navigate>
};

export default AdminRoute;
