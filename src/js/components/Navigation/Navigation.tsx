import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '@components/Logo/Logo';
import styles from './Navigation.module.scss';

export function Navigation() {
  return (
    <nav className={styles.container}>
      <Link to="/">
        <Logo />
      </Link>
    </nav>
  );
}
