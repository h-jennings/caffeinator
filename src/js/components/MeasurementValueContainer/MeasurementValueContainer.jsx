import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as TempIcon } from '../../../images/temp.svg';
import { ReactComponent as DropIcon } from '../../../images/drop.svg';
import styles from './MeasurementValueContainer.module.scss';

function MeasurementValueContainer({ current, temp }) {
  return (
    <div className={styles.container}>
      <div className={styles.measurement}>
        <TempIcon className={styles.icon} />
        <div className={styles.text}>
          {temp || 0}
          &deg;F
        </div>
      </div>
      <div className={styles.measurement}>
        <DropIcon className={styles.icon} />
        <div className={styles.text}>
          {current.context.fluidOuncesDisplayValue}
          oz
        </div>
      </div>
    </div>
  );
}

MeasurementValueContainer.propTypes = {
  current: PropTypes.objectOf(PropTypes.any).isRequired,
  temp: PropTypes.number.isRequired,
};

export default MeasurementValueContainer;
