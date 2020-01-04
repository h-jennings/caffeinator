import React from 'react';
import styles from './MainContainer.module.scss';

function MainContainer({ headline, children }) {
  return (
    <main className={styles.wrapper}>
      {headline && (<h1 className={styles.headline}>{headline}</h1>)}
      <div className={styles.contentContainer}>
        {children}
      </div>
    </main>
  );
}

export default MainContainer;
