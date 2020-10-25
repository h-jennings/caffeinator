import React from 'react';
import styles from './RangeSlider.module.scss';

type RangeSliderProps = {
  handleRangeChange: () => void;
};

export const RangeSlider = React.forwardRef<HTMLInputElement, RangeSliderProps>(
  ({ handleRangeChange }, ref) => (
    <div className={styles.sliderContainer}>
      <input
        ref={ref}
        type='range'
        name='flOunces'
        min='8'
        max='40'
        step='1'
        defaultValue='1'
        id='flOunces'
        onChange={handleRangeChange}
        className={styles.input}
      />
    </div>
  ),
);
