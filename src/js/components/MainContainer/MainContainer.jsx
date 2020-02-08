import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './MainContainer.module.scss';
import { ReactComponent as BackArrow } from '../../../images/backArrow.svg';

function MainContainer({ headline, children }) {
  const history = useHistory();
  const location = useLocation();
  const handleClick = () => history.goBack();
  return (
    <main className={styles.wrapper}>
      {headline && (<h1 className={styles.headline}>{headline}</h1>)}
      <div className={styles.contentContainer}>
        {children}
        {/* if not home page, show button */}
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

MainContainer.propTypes = {
  headline: PropTypes.string,
  children: PropTypes.node.isRequired,
};

MainContainer.defaultProps = {
  headline: '',
};

export default MainContainer;
