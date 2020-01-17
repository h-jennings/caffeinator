import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import MachineButton from '../../../../../../../components/MachineButton';
import RangeSlider from './RangeSlider';
import styles from './StartState.module.scss';
import CupSelector from './CupSelector';
import FlexContainer from '../../../../../../../components/FlexContainer';
import useScrollToTop from '../../../../../../../utils/useScrollToTop';

function Start({ send, current, ratio }) {
  useScrollToTop();
  const rangeRef = useRef(null);
  const handleRangeChange = () => {
    send({ type: 'CHANGE', fluidOunces: rangeRef.current.value, ratio });
  };

  // Synchronizes the value of the range input to the state machine context
  useEffect(() => {
    rangeRef.current.value = current.context.fluidOunces;
  }, [current.context.fluidOunces]);

  return (
    <>
      <CupSelector send={send} ratio={ratio} />
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
      <RangeSlider ref={rangeRef} handleRangeChange={handleRangeChange} />
      <FlexContainer>
        <MachineButton
          send={send}
          eventType="NEXT"
        >
          Make Coffee
        </MachineButton>
      </FlexContainer>
    </>
  );
}

Start.propTypes = {
  current: PropTypes.objectOf(PropTypes.any).isRequired,
  send: PropTypes.func.isRequired,
  ratio: PropTypes.number.isRequired,
};

export default Start;
