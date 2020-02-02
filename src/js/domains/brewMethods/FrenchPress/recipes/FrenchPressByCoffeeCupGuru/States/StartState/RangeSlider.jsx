import React from 'react';
import PropTypes from 'prop-types';
import styles from './RangeSlider.module.scss';


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
  </div>
));

RangeSlider.propTypes = {
  handleRangeChange: PropTypes.func.isRequired,
};

export default RangeSlider;
