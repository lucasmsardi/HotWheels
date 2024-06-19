import React from "react";
import styles from './NotFound.module.css'; 

function NotFound() {
  return (
    <div className={styles.containerNotFound}>
      <h1>404 - Not Found</h1>
      <p>A página que você procura não existe.</p>
    </div>
  );
}

export default NotFound;
