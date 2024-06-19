import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; 

const Navbar = () => (
  <nav className={styles.navegacao}>
    <img className={styles.img} src='/favicon.png'></img>
    <Link to="/">Home</Link>
    <Link to="/about">Sobre</Link>
    <Link to="/carros">Carros</Link>
    <Link to="/adicionar-carro">Adicionar Carro</Link>
  </nav>
);

export default Navbar;
