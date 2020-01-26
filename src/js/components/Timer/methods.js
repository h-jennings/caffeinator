import { assign, sendParent } from 'xstate';

// Setting initial value of the timer
const setDefaults = assign({
  duration_ms: (context, event) => {
    const { ms } = event;

    return ms;
  },
});

const setNow = assign({
  now: (_context, _event) => Date.now(),
});

const startTimer = assign({
  start_time: (context, _event) => (context.now || 0),
});

const stopTimer = assign({
  stop_time: (context, _event) => (context.now || 0),
});

// Reset timer values
const resetTimer = assign({
  seconds: undefined,
  duration_ms: undefined,
  start_time: undefined,
  remaining_ms: undefined,
  elapsed_ms: undefined,
  elapsed_last_ms: undefined,
  now: undefined,
});

const updateRemainingFromRunning = assign({
  remaining_ms: (context, _event) => (
    context.duration_ms
      ? context.duration_ms - (context.elapsed_ms || 0)
      : undefined
  ),
});

const updateElapsedFromRunning = assign({
  elapsed_ms: (context, _event) => (context.elapsed_last_ms || 0)
    + (context.now || 0)
    - (context.start_time || 0),
});

const updateLastElapsed = assign({
  elapsed_last_ms: (context, _event) => (context.elapsed_last_ms || 0)
    + (context.stop_time ? context.stop_time : 0)
    - (context.start_time ? context.start_time : 0),

});

const updateElapsedAndRemainingOnExit = assign({
  elapsed_ms: (context, _event) => (context.elapsed_last_ms || 0),
  remaining_ms: (context, _event) => (
    context.duration_ms
      ? context.duration_ms - (context.elapsed_ms || 0)
      : undefined
  ),
});

const startIntervalService = (context, _event) => (callback, _onReceive) => {
  let stopTimerTimeout;
  if (context.duration_ms) {
    stopTimerTimeout = setTimeout(() => {
      callback('DONE');
    }, context.duration_ms - (context.elapsed_ms || 0));
  }

  // CALL UPDATE INITIALLY
  if (!updateTimer) callback('UPDATE');

  const updateTimer = setInterval(() => callback('UPDATE'), context.update_frequency_ms);

  return () => {
    clearInterval(updateTimer);
    if (stopTimerTimeout) clearTimeout(stopTimerTimeout);
  };
};

const updateParent = sendParent('TIMER_UPDATED', {
  remaining_ms: (context, _event) => context.remaining_ms,
});


const TimerMethodConfig = {
  actions: {
    setDefaults,
    setNow,
    startTimer,
    stopTimer,
    resetTimer,
    updateRemainingFromRunning,
    updateElapsedFromRunning,
    updateElapsedAndRemainingOnExit,
    updateLastElapsed,
    updateParent,
  },
  services: {
    startIntervalService,
  },
};

export default TimerMethodConfig;
