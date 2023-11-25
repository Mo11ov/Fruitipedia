import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import FruitsPage from './components/fruits/FruitsPage';
import FruitDetails from './components/fruits/FruitDetails';


function App() {
  return (
    <div >
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/fruits' element={<FruitsPage />} />
          <Route path='fruits/:id' element={<FruitDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
