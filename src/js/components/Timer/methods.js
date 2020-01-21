import { assign } from 'xstate';

// Setting initial value of the timer
const setDefaults = assign({
  seconds: (_context, event) => {
    const { seconds } = event;

    return seconds;
  },
  duration_ms: (_context, event) => {
    const { seconds } = event;
    const ms = seconds * 1000;

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
  elapsed_ms: (context, _event) => (context.now || 0) - (context.start_time || 0),
});

const updateElapsedAndRemainingOnExit = assign({
  elapsed_ms: (context, _event) => (context.stop_time || 0) - (context.start_time || 0),
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


  const updateTimer = setInterval(() => callback('UPDATE'), context.update_frequency_ms);

  return () => {
    clearInterval(updateTimer);
    if (stopTimerTimeout) clearTimeout(stopTimerTimeout);
  };
};


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
  },
  services: {
    startIntervalService,
  },
};

export default TimerMethodConfig;
