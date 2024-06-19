import React from 'react';
import styles from './Home.module.css'; 

const Home = () => {
  return (
    <div className={styles.homeContainer}>
        <h1 className={styles.title}>Bem vindo ao CRUD de HotWheels</h1>
        <p className={styles.paragraph}>Projeto elaborado na Disciplina Desenvolvimento de Sistemas Frontend</p>
        <p className={styles.paragraph}>Do curso de Graduação Online da PUCRS.</p>
        <img src='./hotwheels1.png' className={styles.image}></img>
    </div>
  );
};

export default Home;
