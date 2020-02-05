import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from './FourZeroFour.module.scss';
import MainContainerHeadlineOuter from '../../components/MainContainerHeadlineOuter';
import Button from '../../components/Button';

function FourZeroFour() {
  const location = useLocation();
  return (
    <MainContainerHeadlineOuter headline="Oops...we got nothin' :(">
      <h3 className={styles.errorText}>
        <code>
          {location.pathname}
          {' '}
        </code>
        doesn&apos;t exist.
      </h3>
      <div className={styles.btnContainer}>
        <Button>
          <Link to="/">
            Back to home
          </Link>
        </Button>
      </div>
    </MainContainerHeadlineOuter>
  );
}

export default FourZeroFour;
