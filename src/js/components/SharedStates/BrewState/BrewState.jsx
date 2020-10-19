import React from 'react';
import PropTypes from 'prop-types';
import { Timer } from '@components/Timer/Timer';

function BrewState({ send, current, ms }) {
  return (
    <>
      <h1>Brew</h1>
      <Timer ms={ms} send={send} current={current} timerName='brewTimer' />
    </>
  );
}

BrewState.propTypes = {
  send: PropTypes.func.isRequired,
  current: PropTypes.objectOf(PropTypes.any).isRequired,
  ms: PropTypes.number.isRequired,
};

export default BrewState;
