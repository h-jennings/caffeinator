import React, { ReactNode } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './MainContainer.module.scss';
import { ReactComponent as BackArrow } from '@/images/backArrow.svg';

type MainContainer = {
  headline?: string;
  children: ReactNode;
};

export function MainContainer({ headline, children }: MainContainer) {
  const history = useHistory();
  const location = useLocation();
  const handleClick = () => history.goBack();
  return (
    <main className={styles.wrapper}>
      {headline && <h1 className={styles.headline}>{headline}</h1>}
      <div className={styles.contentContainer}>
        {children}
        {/* if not home page, show button */}
        {location.pathname !== '/' ? (
          <button
            type="button"
            onClick={handleClick}
            className={styles.prevBtn}
          >
            <BackArrow width="15" />
          </button>
        ) : null}
      </div>
    </main>
  );
}
