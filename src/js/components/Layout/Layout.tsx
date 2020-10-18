import React, { ReactNode } from 'react';
import { Navigation } from '@components/Navigation/Navigation';
import styles from './Layout.module.scss';

type Layout = {
  children: ReactNode;
};

export function Layout({ children }: Layout) {
  return (
    <>
      <Navigation />
      <div className={styles.appContainer}>{children}</div>
    </>
  );
}
