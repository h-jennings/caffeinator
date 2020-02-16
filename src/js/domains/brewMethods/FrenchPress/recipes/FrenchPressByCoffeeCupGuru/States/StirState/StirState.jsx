import React from 'react';
import PropTypes from 'prop-types';
import Timer from '../../../../../../../components/Timer';

function StirState({ send, current }) {
  return (
    <>
      <h1>Stir</h1>
      <Timer ms={15000} send={send} current={current} />
    </>
  );
}

StirState.propTypes = {
  send: PropTypes.func.isRequired,
  current: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default StirState;
