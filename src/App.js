import { Routes, Route } from 'react-router-dom';

import { UserContext } from './contexts/UserContext';
import { useLocalStorage } from './hooks/useLocalStorage';

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import FruitsPage from './components/fruits/FruitsPage';
import FruitDetails from './components/fruits/FruitDetails';
import LoginPage from './components/LoginPage';
import LogoutPage from './components/LogoutPage';
import RegisterPage from './components/RegisterPage';
import CreatePage from './components/CreatePage';
import Footer from './components/Footer';
import EditPage from './components/EditPage';
import SearchPage from './components/SearchPage';
import ControlledCreatePage from './components/ControlledCreatePage';


function App() {

    const [user, setUser] = useLocalStorage('userData', {});

    const userLogin = (authData) => {
        setUser(authData);
    };

    const userLogout = () => {
        setUser({});
    };


    return (
        <UserContext.Provider value={{ user, userLogin, userLogout }}>
            <div >
                <NavBar />
                <main>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/fruits' element={<FruitsPage />} />
                        <Route path='fruits/:id' element={<FruitDetails />} />
                        <Route path='fruits/:id/edit' element={<EditPage />} />
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/logout' element={<LogoutPage />} />
                        <Route path='/register' element={<RegisterPage />} />
                        <Route path='/create' element={<ControlledCreatePage />} />
                        <Route path='/search' element={<SearchPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </UserContext.Provider>
    );
}

export default App;
