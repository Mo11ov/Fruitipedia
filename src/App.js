import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/UserContext';

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
import PrivateRoute from './common/PrivateRoute';


function App() {

    return (
        <AuthProvider >
            <div >
                <NavBar />
                <main>
                    <Routes>
                        <Route element={<PrivateRoute />}>
                            <Route path='/create' element={<ControlledCreatePage />} />
                            <Route path='fruits/:id/edit' element={<EditPage />} />
                        </Route>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/fruits' element={<FruitsPage />} />
                        <Route path='fruits/:id' element={<FruitDetails />} />
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/logout' element={<LogoutPage />} />
                        <Route path='/register' element={<RegisterPage />} />
                        <Route path='/search' element={<SearchPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
