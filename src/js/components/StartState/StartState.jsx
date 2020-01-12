import React, { useRef, useEffect } from 'react';
import MachineButton from '../MachineButton';
import RangeSlider from './RangeSlider';
import styles from './StartState.module.scss';
import CupSelector from './CupSelector';

function Start({ send, current, ratio }) {
  const rangeRef = useRef(null);
  const handleRangeChange = () => {
    send({ type: 'CHANGE', fluidOunces: rangeRef.current.value });
  };

  // Synchronizes the value of the range input to the state machine context
  useEffect(() => {
    rangeRef.current.value = current.context.fluidOunces;
  }, [current.context.fluidOunces]);

  return (
    <>
      <CupSelector send={send} />
      <div className={styles.valuesContainer}>
        <h1>
          {current.context.fluidOunces}
          oz
        </h1>
        <h1>
          {Math.round((parseInt(current.context.fluidOunces, 10) * ratio)).toString()}
          g
        </h1>
      </div>
      <RangeSlider ref={rangeRef} handleRangeChange={handleRangeChange} />
      <MachineButton
        send={send}
        eventType="NEXT"
      >
        Make Coffee
      </MachineButton>
    </>
  );
}

export default Start;
