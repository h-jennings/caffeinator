import React from 'react';
import PropTypes from 'prop-types';
import styles from './UnitsContainer.module.scss';

function UnitsContainer({ current }) {
  return (
    <div className={styles.valuesContainer}>
      <div className={styles.valueContainer}>
        <p>{current.context.fluidOunces}</p>
        <div className={styles.unitContainer}>
          <p>
            oz
          </p>
        </div>
      </div>
      <div className={styles.valueContainer}>
        <p>{current.context.grams}</p>
        <div className={styles.unitContainer}>
          <p>
            g
          </p>
        </div>
      </div>
    </div>
  );
}

UnitsContainer.propTypes = {
  current: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default UnitsContainer;
