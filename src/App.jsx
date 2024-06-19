import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Navbar from "./components/Navbar/Navbar.jsx"
import "./App.css";

function App() {
  return (
    <Router>
      <div id="box" data-testid='oi'>
        <Navbar />
        <main>
          <AppRoutes />
        </main>
        </div>
    </Router>
  );
}

export default App;
