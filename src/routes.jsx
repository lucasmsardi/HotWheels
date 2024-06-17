import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import CarDetail from './components/CarDetail/CarDetail';
import NotFound from './components/NotFound/NotFound';

function AppRoutes() {
  return (
    <Router>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/carros" element={<CarDetail currentPage="CarsList" />} />
      <Route path="/adicionar-carro" element={<CarDetail currentPage="CarForm" />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Router>
  )
}

export default AppRoutes;
