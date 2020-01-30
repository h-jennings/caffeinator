import { Machine, sendParent } from 'xstate';
import TimerMethodConfig from './methods';

const TimerMachine = Machine({
  id: 'Timer',
  initial: 'idle',
  context: {
    update_frequency_ms: undefined,
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
        START: {
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
            sendParent((context) => ({
              type: 'TIMER_UPDATED',
              remaining_ms: (context.remaining_ms || 0),
            })),
          ],
        },
        RESET: {
          target: 'idle',
          actions: [
            'resetTimer',
            sendParent((context) => ({
              type: 'TIMER_UPDATED',
              remaining_ms: (context.remaining_ms || 0),
            })),
          ],
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
