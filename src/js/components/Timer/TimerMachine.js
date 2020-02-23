import { Machine, sendParent } from 'xstate';
import TimerMethodConfig from './methods';
import timerButtonStates from '../../utils/timerButtonStates';

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
        START: 'running',
      },
    },
    running: {
      invoke: {
        id: 'incInterval',
        src: 'startIntervalService',
      },
      entry: [
        'setNow',
        'startTimer',
        sendParent({
          type: 'TIMER_STATE_UPDATED',
          timerButtonState: timerButtonStates.pause,
        }),
      ],
      exit: [
        'setNow',
        'stopTimer',
        'updateLastElapsed',
        'updateElapsedAndRemainingOnExit',
      ],
      on: {
        PAUSE: {
          target: 'paused',
          actions: sendParent({
            type: 'TIMER_STATE_UPDATED',
            timerButtonState: timerButtonStates.play,
          }),
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
          actions: sendParent('NEXT'),
        },
      },
    },
    paused: {
      on: {
        RESUME: {
          target: 'running',
          actions: sendParent({
            type: 'TIMER_STATE_UPDATED',
            timerButtonState: timerButtonStates.pause,
          }),
        },
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
