import React, { ReactNode } from 'react';
import styles from './FlexContainer.module.scss';

type FlexContainerProps = {
  children: ReactNode;
};

export function FlexContainer({ children }: FlexContainerProps) {
  return <div className={styles.container}>{children}</div>;
}
