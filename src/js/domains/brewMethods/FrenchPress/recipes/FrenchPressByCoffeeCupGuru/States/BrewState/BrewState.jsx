import React from 'react';
import PropTypes from 'prop-types';
import Timer from '../../../../../../../components/Timer';

function BrewState({ send, current }) {
  return (
    <>
      <h1>Brew</h1>
      <Timer ms={240000} send={send} current={current} />
    </>
  );
}

BrewState.propTypes = {
  send: PropTypes.func.isRequired,
  current: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default BrewState;
