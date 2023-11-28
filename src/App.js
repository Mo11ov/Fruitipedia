import { Routes, Route } from 'react-router-dom';

import { UserContext } from './contexts/UserContext';
import { useLocalStorage } from './hooks/useLocalStorage';

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import FruitsPage from './components/fruits/FruitsPage';
import FruitDetails from './components/fruits/FruitDetails';
import LoginPage from './components/LoginPage';


function App() {

    const [user, setUser] = useLocalStorage('userData', {});

    const userLogin = (authData) => {
        setUser(authData);
    };

    return (
        <UserContext.Provider value={{ user, userLogin }}>
            <div >
                <NavBar />
                <main>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/fruits' element={<FruitsPage />} />
                        <Route path='fruits/:id' element={<FruitDetails />} />
                        <Route path='/login' element={<LoginPage />} />
                    </Routes>
                </main>
            </div>
        </UserContext.Provider>
    );
}

export default App;
