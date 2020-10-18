import React, { ReactNode } from 'react';
import { Navigation } from '@components/Navigation/Navigation';
import styles from './Layout.module.scss';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navigation />
      <div className={styles.appContainer}>{children}</div>
    </>
  );
}
