import React, { useEffect } from 'react';
import { useMachine } from '@xstate/react';
import PropTypes from 'prop-types';
import TimerMachine from './TimerMachine';
import toTimeString from '../../utils/toTimeString';

function Timer({ seconds }) {
  const [current, send] = useMachine(TimerMachine);

  useEffect(() => {
    send('START', { seconds });
  }, [seconds, send]);

  return (
    <>
      {(current.context.remaining_ms && toTimeString(current.context.remaining_ms, true)) || '00:15'}
      <button
        type="button"
        onClick={() => handleClick()}
      >
        START
      </button>
      <button onClick={() => send('RESUME')}>
        RESUME
      </button>
      <button onClick={() => send('PAUSE')}>
        PAUSE
      </button>
    </>
  );
}
Timer.propTypes = {
  // bla: PropTypes.string,
};

Timer.defaultProps = {
  // bla: 'test',
};

export default Timer;
