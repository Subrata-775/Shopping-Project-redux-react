

import './index.css';
import NavBar from './Components/NavBar'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import CartPage from './Pages/CartPage'

function App() {
  return (
    <div className="App">
      <div className='bg-slate-900'>
        <NavBar />
      </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
