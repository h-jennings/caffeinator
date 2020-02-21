import React from 'react';
import PropTypes from 'prop-types';
import Timer from '../../../../../../../components/Timer';

function BloomState({ send, current }) {
  return (
    <>
      <h1>Let it bloom</h1>
      <Timer ms={30000} send={send} current={current} />
    </>
  );
}

BloomState.propTypes = {
  send: PropTypes.func.isRequired,
  current: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default BloomState;