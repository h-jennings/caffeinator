import React from 'react';
import PropTypes from 'prop-types';
import styles from './StateBodyText.module.scss';


function StateBodyText({ children }) {
  return (
    <p className={styles.text}>
      {children}
    </p>
  );
}

StateBodyText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StateBodyText;
