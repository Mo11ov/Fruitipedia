import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { UserContext } from '../contexts/UserContext';

function PrivateRoute() {
    const { user } = useContext(UserContext);

    if (!user.accessToken) {
        return <Navigate to='/login' replace />;
    }

    return <Outlet />;
};

export default PrivateRoute;