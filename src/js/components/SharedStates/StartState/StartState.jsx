import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import MachineButton from '../../MachineButton';
import RangeSlider from './RangeSlider';
import CupSelector from './CupSelector';
import FlexContainer from '../../FlexContainer';
import useScrollToTop from '../../../utils/global/useScrollToTop';
import UnitsContainer from './UnitsContainer';

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
      <CupSelector send={send} ratio={ratio} current={current} />
      <UnitsContainer current={current} />
      <RangeSlider ref={rangeRef} handleRangeChange={handleRangeChange} />
      <FlexContainer>
        <MachineButton send={send} eventType="NEXT">
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
