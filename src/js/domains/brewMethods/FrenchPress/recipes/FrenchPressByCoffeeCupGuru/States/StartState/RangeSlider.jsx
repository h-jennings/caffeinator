import React from 'react';
import styles from './StartState.module.scss';


const RangeSlider = React.forwardRef(({ handleRangeChange }, ref) => (
  <div className={styles.sliderContainer}>
    <input
      ref={ref}
      type="range"
      name="flOunces"
      min="8"
      max="40"
      step="1"
      defaultValue="8"
      id="flOunces"
      onChange={handleRangeChange}
      className={styles.input}
    />
    <div className={styles.rangeTrackContainer}>
      <div className={styles.rangeTrackMarker} />
      <div className={styles.rangeTrackMarker} />
      <div className={styles.rangeTrackMarker} />
      <div className={styles.rangeTrackMarker} />
      <div className={styles.rangeTrackMarker} />
    </div>
  </div>
));

export default RangeSlider;
