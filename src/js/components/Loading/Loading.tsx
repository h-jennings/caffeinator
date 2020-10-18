import React from 'react';
import { MainContainer } from '@components/MainContainer/MainContainer';
import styles from './Loading.module.scss';
import { ReactComponent as SpinnerSvg } from '@/images/spinner.svg';

export function Loading() {
  return (
    <MainContainer>
      <SpinnerSvg className={styles.spinner} />
    </MainContainer>
  );
}
