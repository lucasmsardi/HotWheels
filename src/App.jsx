import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./App.css";
import About from "./components/About/About.jsx";
import Home from "./components/Home/Home.jsx";
import CarDetail from "./components/CarDetail/CarDetail.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

function App() {
  return (
    <Router>
      <div id="box">
        <nav id="navegacao">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/carros">Carros</Link>
          <Link to="/adicionar-carro">Adicionar Carro</Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/carros" element={<CarDetail currentPage="CarsList" />} />
            <Route path="/adicionar-carro" element={<CarDetail currentPage="CarForm" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
