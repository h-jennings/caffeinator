import React from 'react';
import { ReactComponent as TempIcon } from '@/images/temp.svg';
import { ReactComponent as DropIcon } from '@/images/drop.svg';
import styles from './MeasurementValueContainer.module.scss';
import { Current } from '@/js/models/xstate.models';

// TODO: declare better types for 'current'
type MeasurementValueContainerProps = {
  current: Current;
  temp: number;
};

export function MeasurementValueContainer({
  current,
  temp,
}: MeasurementValueContainerProps) {
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
