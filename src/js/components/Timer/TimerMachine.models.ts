export type TimerMachineState = {
  states: {
    idle: {};
    running: {};
    paused: {};
    done: {};
  };
};

export type TimerEvent =
  | { type: 'START' }
  | { type: 'PAUSE' }
  | { type: 'UPDATE' }
  | { type: 'RESET' }
  | { type: 'DONE' }
  | { type: 'RESUME' };

export type TimerContext = {
  update_frequency_ms?: number;
  start_time?: number;
  stop_time?: number;
  elapsed_ms?: number;
  elapsed_last_ms?: number;
  remaining_ms?: number;
  duration_ms?: number;
  seconds?: number;
  now?: number;
};

export const TimerContextDefault: TimerContext = {
  update_frequency_ms: undefined,
  start_time: undefined,
  stop_time: undefined,
  elapsed_ms: undefined,
  elapsed_last_ms: undefined,
  remaining_ms: undefined,
  duration_ms: undefined,
  now: undefined,
};
