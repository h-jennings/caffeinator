import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './MainContainerHeadlineOuter.module.scss';
import { ReactComponent as BackArrow } from '../../../images/backArrow.svg';

function MainContainerHeadlineOuter({ headline, children }) {
  const history = useHistory();
  const location = useLocation();
  const handleClick = () => history.goBack();
  return (
    <main className={styles.wrapper}>
      {headline && (<h1 className={styles.headline}>{headline}</h1>)}
      <div className={styles.contentContainer}>
        {children}
        {location.pathname !== '/' && (
          <button
            type="button"
            onClick={handleClick}
            className={styles.prevBtn}
          >
            <BackArrow width="15" />
          </button>
        )}
      </div>
    </main>
  );
}

export default MainContainerHeadlineOuter;
