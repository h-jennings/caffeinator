import React, { useEffect } from 'react';
import { useMachine } from '@xstate/react';
import PropTypes from 'prop-types';
import TimerMachine from './TimerMachine';
import toTimeString from '../../utils/toTimeString';

function Timer({ ms }) {
  const [current, send] = useMachine(TimerMachine);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      send('START', { ms });
    }, 1000);

    return () => {
      clearTimeout(startTimer);
    };
  }, [ms, send]);

  return (
    <>
      {
        ((current.context.remaining_ms
          && toTimeString(current.context.remaining_ms))
          || toTimeString(ms))
      }
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
