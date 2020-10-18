import React, { ReactNode } from 'react';
import styles from '@styles/shared/shared.scss';

type Button = {
  children: ReactNode;
};

export function Button({ children }: Button) {
  return (
    <button type="button" className={styles.btnBase}>
      {children}
    </button>
  );
}
