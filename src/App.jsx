import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Menu from './components/Menu';
import Delivery from './components/Delivery';
import FindUs from './components/FindUs';
function App() {
  return (
    
    <div >
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/findus" element={<FindUs />} />
      </Routes>
    </div>
  );
}

export default App
