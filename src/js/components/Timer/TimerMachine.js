import { Machine } from 'xstate';
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
    now: undefined,
  },
  states: {
    idle: {
      on: {
        START: {
          target: 'running',
          actions: 'setDefaults',
        },
      },
    },
    running: {
      invoke: {
        id: 'incInterval',
        src: 'startIntervalService',
      },
      onEntry: ['setNow', 'startTimer'],
      onExit: [
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
      type: 'final',
    },
  },
}, {
  ...TimerMethodConfig,
});

export default TimerMachine;
