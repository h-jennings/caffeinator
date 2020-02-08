import React from 'react';
import PropTypes from 'prop-types';
import FlexContainer from '../../../../../../../components/FlexContainer';
import MachineArrowButton from '../../../../../../../components/MachineArrowButton';
import Timer from '../../../../../../../components/Timer';

function StirState({ send, current }) {
  return (
    <>
      <h1>Stir</h1>
      <Timer ms={15000} send={send} current={current} />
      <FlexContainer>
        <MachineArrowButton send={send} eventType="PREV" />
        <MachineArrowButton send={send} eventType="NEXT" />
      </FlexContainer>
    </>
  );
}

StirState.propTypes = {
  send: PropTypes.func.isRequired,
  current: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default StirState;
