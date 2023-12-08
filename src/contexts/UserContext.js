import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const UserContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useLocalStorage('userData', {});

    const userLogin = (authData) => {
        setUser(authData);
    };

    const userLogout = () => {
        setUser({});
    };

    return (
        <UserContext.Provider value={{ user, userLogin, userLogout }}>
            {children}
        </UserContext.Provider>
    );
};
