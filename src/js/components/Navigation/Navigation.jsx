import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <nav className={styles.container}>
      <Link to="/">
        <Logo />
      </Link>
    </nav>
  );
}

export default Navigation;
