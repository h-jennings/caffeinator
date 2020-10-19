import React from 'react';
import PropTypes from 'prop-types';
import { Timer } from '@components/Timer/Timer';

function StirState({ send, current, ms }) {
  return (
    <>
      <h1>Stir</h1>
      <Timer ms={ms} send={send} current={current} timerName='stirTimer' />
    </>
  );
}

StirState.propTypes = {
  send: PropTypes.func.isRequired,
  current: PropTypes.objectOf(PropTypes.any).isRequired,
  ms: PropTypes.number.isRequired,
};

export default StirState;
