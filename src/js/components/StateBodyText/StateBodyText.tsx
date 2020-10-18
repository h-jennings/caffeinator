import React, { ReactNode } from 'react';
import styles from './StateBodyText.module.scss';

type StateBodyTextProps = {
  children: ReactNode;
};

export function StateBodyText({ children }: StateBodyTextProps) {
  return <p className={styles.text}>{children}</p>;
}
