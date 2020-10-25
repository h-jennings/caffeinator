import { assign, EventObject, sendParent } from 'xstate';
import { TimerContext, TimerEvent } from './TimerMachine.models';
import timerButtonStates from '../../utils/machine/timerButtonStates';

export const setNow = assign<TimerContext>({
  now: (_context, _event) => Date.now(),
});

export const startTimer = assign<TimerContext>({
  start_time: (context, _event) => context.now || 0,
});

export const stopTimer = assign<TimerContext>({
  stop_time: (context, _event) => context.now || 0,
});

// Reset timer values
export const resetTimer = assign<TimerContext>({
  seconds: undefined,
  duration_ms: undefined,
  start_time: undefined,
  remaining_ms: undefined,
  elapsed_ms: undefined,
  elapsed_last_ms: undefined,
  now: undefined,
});

export const updateRemainingFromRunning = assign<TimerContext>({
  remaining_ms: (context, _event) =>
    context.duration_ms
      ? context.duration_ms - (context.elapsed_ms || 0)
      : undefined,
});

export const updateElapsedFromRunning = assign<TimerContext>({
  elapsed_ms: (context, _event) =>
    (context.elapsed_last_ms || 0) +
    (context.now || 0) -
    (context.start_time || 0),
});

export const updateLastElapsed = assign<TimerContext>({
  elapsed_last_ms: (context, _event) =>
    (context.elapsed_last_ms || 0) +
    (context.stop_time ? context.stop_time : 0) -
    (context.start_time ? context.start_time : 0),
});

export const updateElapsedAndRemainingOnExit = assign<TimerContext>({
  elapsed_ms: (context, _event) => context.elapsed_last_ms || 0,
  remaining_ms: (context, _event) =>
    context.duration_ms
      ? context.duration_ms - (context.elapsed_ms || 0)
      : undefined,
});

export const sendPausedUIStateToParent = sendParent<TimerContext, TimerEvent>({
  type: 'TIMER_STATE_UPDATED',
  timerButtonState: timerButtonStates.pause,
});

export const sendPlayUIStateToParent = sendParent<TimerContext, TimerEvent>({
  type: 'TIMER_STATE_UPDATED',
  timerButtonState: timerButtonStates.play,
});

export const startIntervalService = (
  context: TimerContext,
  _event: EventObject,
) => (callback: (x: string) => any, _onReceive: any) => {
  let stopTimerTimeout: ReturnType<typeof setTimeout>;
  if (context.duration_ms) {
    stopTimerTimeout = setTimeout(() => {
      callback('DONE');
    }, context.duration_ms - (context.elapsed_ms || 0));
  }

  const updateTimer = setInterval(() => {
    callback('UPDATE');
  }, context.update_frequency_ms || 1000);

  return () => {
    clearInterval(updateTimer);
    if (stopTimerTimeout) clearTimeout(stopTimerTimeout);
  };
};
