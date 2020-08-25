import React from 'react';
import PropTypes from 'prop-types';
import styles from './UnitsContainer.module.scss';

function UnitsContainer({ current }) {
  return (
    <div className={styles.valuesContainer}>
      <div className={styles.valueContainer}>
        <div className={styles.measurementValueText}>
          {current.context.fluidOunces}
        </div>
        <div className={styles.unitContainer}>
          <div className={styles.unitTypeText}>oz</div>
        </div>
      </div>
      <div className={styles.valueContainer}>
        <div className={styles.measurementValueText}>
          {current.context.grams}
        </div>
        <div className={styles.unitContainer}>
          <div className={styles.unitTypeText}>g</div>
        </div>
      </div>
    </div>
  );
}

UnitsContainer.propTypes = {
  current: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default UnitsContainer;
