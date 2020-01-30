import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import toTimeString from '../../utils/toTimeString';

function Timer({ ms, current, send }) {
  return (
    <>
      <h2>
        {
          ((current.context.remaining_ms
            && toTimeString(current.context.remaining_ms))
            || toTimeString(ms))
        }
      </h2>
      <button
        type="button"
        onClick={() => send('RESUME')}
      >
        RESUME
      </button>
      <button
        type="button"
        onClick={() => send('PAUSE')}
      >
        PAUSE
      </button>
    </>
  );
}
Timer.propTypes = {
  ms: PropTypes.number.isRequired,
};

export default Timer;
