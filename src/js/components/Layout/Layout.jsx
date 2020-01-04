import React from 'react';
import Navigation from '../Navigation';
import styles from './Layout.module.scss';

function Layout({ children }) {
  return (
    <>
      <Navigation />
      <div className={styles.appContainer}>
        {children}
      </div>
    </>
  );
}

export default Layout;
