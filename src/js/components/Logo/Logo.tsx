import React from 'react';
import styles from './Logo.module.scss';
import { ReactComponent as LogoSvg } from '@/images/logo.svg';

export function Logo() {
  return (
    <div className={styles.container}>
      <LogoSvg className="Logo" width="60" />
    </div>
  );
}
