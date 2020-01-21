import React, { useEffect } from 'react';
import { useMachine } from '@xstate/react';
import PropTypes from 'prop-types';
import TimerMachine from './TimerMachine';

function Timer({ seconds }) {
  const [current, send] = useMachine(TimerMachine);
  const handleClick = () => {
    send('START', { seconds });
  };
  useEffect(() => {
    console.log(current.value);
  }, [current.value]);

  useEffect(() => {
    console.log(current.context.remaining_ms / 1000);
  }, [current.context.remaining_ms]);

  return (
    <>
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
