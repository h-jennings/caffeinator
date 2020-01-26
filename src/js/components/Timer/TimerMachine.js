import { Machine, sendParent } from 'xstate';
import TimerMethodConfig from './methods';

const TimerMachine = Machine({
  id: 'Timer',
  initial: 'idle',
  context: {
    update_frequency_ms: 1000,
    start_time: undefined,
    stop_time: undefined,
    elapsed_ms: undefined,
    elapsed_last_ms: undefined,
    remaining_ms: undefined,
    duration_ms: undefined,
    now: undefined,
  },
  states: {
    idle: {
      on: {
        '': {
          target: 'running',
        },
      },
    },
    running: {
      invoke: {
        id: 'incInterval',
        src: 'startIntervalService',
      },
      entry: ['setNow', 'startTimer'],
      exit: [
        'setNow',
        'stopTimer',
        'updateLastElapsed',
        'updateElapsedAndRemainingOnExit',
      ],
      on: {
        PAUSE: {
          target: 'paused',
        },
        UPDATE: {
          actions: [
            'setNow',
            'updateElapsedFromRunning',
            'updateRemainingFromRunning',
            'updateParent', // ! Y U NO WORK
          ],
        },
        RESET: {
          target: 'idle',
          actions: 'resetTimer',
        },
        DONE: {
          target: 'done',
        },
      },
    },
    paused: {
      on: {
        RESUME: 'running',
        RESET: {
          target: 'idle',
          actions: 'resetTimer',
        },
      },
    },
    done: {
      entry: sendParent('NEXT'),
      type: 'final',
    },
  },
}, {
  ...TimerMethodConfig,
});

export default TimerMachine;
