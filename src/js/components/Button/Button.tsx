import React, { ReactNode } from 'react';
import styles from '@styles/shared/shared.scss';

type ButtonProps = {
  children: ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <button type='button' className={styles.btnBase}>
      {children}
    </button>
  );
}
