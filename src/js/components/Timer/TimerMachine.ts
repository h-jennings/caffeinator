import { Machine, sendParent } from 'xstate';
import {
  setNow,
  startTimer,
  stopTimer,
  resetTimer,
  updateRemainingFromRunning,
  updateElapsedFromRunning,
  updateElapsedAndRemainingOnExit,
  updateLastElapsed,
  sendPausedUIStateToParent,
  sendPlayUIStateToParent,
  startIntervalService,
} from './methods';
import {
  TimerContext,
  TimerContextDefault,
  TimerEvent,
  TimerMachineState,
} from './TimerMachine.models';

// TODO: Figure out how to make this machine type safe...
export const TimerMachine = Machine<
  TimerContext,
  TimerMachineState,
  TimerEvent
>(
  {
    id: 'Timer',
    initial: 'idle',
    context: {
      ...TimerContextDefault,
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
        entry: ['setNow', 'startTimer', 'sendPausedUIStateToParent'],
        exit: [
          'setNow',
          'stopTimer',
          'updateLastElapsed',
          'updateElapsedAndRemainingOnExit',
        ],
        on: {
          PAUSE: {
            target: 'paused',
            actions: 'sendPlayUIStateToParent',
          },
          UPDATE: {
            actions: [
              'setNow',
              'updateElapsedFromRunning',
              'updateRemainingFromRunning',
              sendParent((context: TimerContext) => ({
                type: 'TIMER_UPDATED',
                remaining_ms: context.remaining_ms || 0,
              })),
            ],
          },
          RESET: {
            target: 'idle',
            actions: [
              'resetTimer',
              sendParent((context: TimerContext) => ({
                type: 'TIMER_UPDATED',
                remaining_ms: context.remaining_ms || 0,
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
            actions: 'sendPausedUIStateToParent',
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
  },
  {
    actions: {
      setNow,
      startTimer,
      stopTimer,
      resetTimer,
      updateRemainingFromRunning,
      updateElapsedFromRunning,
      updateElapsedAndRemainingOnExit,
      updateLastElapsed,
      sendPausedUIStateToParent,
      sendPlayUIStateToParent,
    },
    services: {
      startIntervalService,
    },
  },
);
