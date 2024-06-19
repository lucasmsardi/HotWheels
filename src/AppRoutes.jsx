import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import CarDetail from './components/CarDetail/CarDetail';
import NotFound from './components/NotFound/NotFound';
import EditCarForm from './components/EditCar/EditCar';

function AppRoutes() {
  return (
    <div className="routes-container">
      <Routes>
        <Route path="/" element={<Home className="route-item" />} />
        <Route path="/about" element={<About className="route-item" />} />
        <Route path="/carros" element={<CarDetail currentPage="CarsList" className="route-item" />} />
        <Route path="/adicionar-carro" element={<CarDetail currentPage="CarForm" className="route-item" />} />
        <Route path="/editar-carro" element={<EditCarForm currentPage="EditCar" className="route-item"/>} />
        <Route path="*" element={<NotFound className="route-item" />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
