import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlexContainer.module.scss';

function FlexContainer({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
FlexContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FlexContainer;
