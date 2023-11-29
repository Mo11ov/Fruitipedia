import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../contexts/UserContext';
import { logout } from '../services/authService';

function LogoutPage() {
    const { userLogout } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        logout()
            .then(() => {
                userLogout();
                navigate('/fruits');
            });
    });
    
    return null;
};

export default LogoutPage;