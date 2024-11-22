import React from 'react';
import styles from '../styles/404.module.css';

const Custom404 = () => {
  return (
    <div className={styles.errorPage}>
      <div className={styles.center}>
        <div className={styles.container}>
          <h1 className={`${styles.neonText} ${styles.pulsate}`}>404</h1>
          <h2 className={`${styles.neonText} ${styles.pulsate}`}>Page Not Found</h2> 
        </div>
      </div>
    </div>
  );
};

export default Custom404;