import {
  Machine,
  assign,
  spawn,
  send,
} from 'xstate';
import TimerMachine from '../../../../../components/Timer/TimerMachine';
import timerButtonStates from '../../../../../utils/timerButtonStates';
import handleFlOzChange from '../../../../../utils/handleFlOzChange';

const FrenchPressByCoffeeCupGuruMachine = Machine({
  id: 'FrenchPressByCoffeeCupGuruMachine',
  initial: 'Start',
  context: {
    fluidOunces: 24,
    fluidOuncesDisplayValue: null,
    grams: 45,
    stirTimer: undefined,
    remaining_ms: undefined,
    timerButtonState: timerButtonStates.pause,
  },
  states: {
    Start: {
      entry: [
        assign({
          fluidOuncesDisplayValue: (context, _event) => context.fluidOunces / 2,
        }),
      ],
      on: {
        CHANGE: {
          target: 'Start',
          actions: 'handleFlOzChange',
        },
        NEXT: {
          target: 'Grind',
        },
      },
    },
    Grind: {
      on: {
        PREV: {
          target: 'Start',
        },
        NEXT: {
          target: 'Add_Water',
        },
      },
    },
    Add_Water: {
      on: {
        PREV: {
          target: 'Grind',
        },
        NEXT: {
          target: 'Stir',
        },
      },
    },
    Stir: {
      entry: [
        assign({
          stirTimer: () => spawn(TimerMachine.withContext({
            update_frequency_ms: 100,
            duration_ms: 15000,
          }), { sync: false, autoForward: true, name: 'stirTimer' }),
        }),
        send('START', { to: 'stirTimer' }),
      ],
      exit: [
        (context, _event) => context.stirTimer.stop(),
        'resetRemainingMs',
        assign({
          timerButtonState: timerButtonStates.pause,
        }),
      ],
      on: {
        TIMER_UPDATED: {
          actions: 'updateRemainingMs',
        },
        TIMER_STATE_UPDATED: {
          actions: 'updateTimerState',
        },
        PREV: {
          target: 'Add_Water',
        },
        NEXT: {
          target: 'Add_Remaining_Water',
        },
      },
    },
    Add_Remaining_Water: {
      entry: [
        assign({
          fluidOuncesDisplayValue: (context, _event) => context.fluidOunces,
        }),
      ],
      on: {
        PREV: {
          target: 'Stir',
        },
        NEXT: {
          target: 'Brew',
        },
      },
    },
    Brew: {
      entry: [
        assign({
          brewTimer: () => spawn(TimerMachine.withContext({
            update_frequency_ms: 100,
            duration_ms: 240000,
          }), { sync: false, autoForward: true, name: 'brewTimer' }),
        }),
        send('START', { to: 'brewTimer' }),
      ],
      exit: [
        (context, _event) => context.brewTimer.stop(),
        'resetRemainingMs',
        assign({
          timerButtonState: timerButtonStates.pause,
        }),
      ],
      on: {
        TIMER_UPDATED: {
          actions: 'updateRemainingMs',
        },
        TIMER_STATE_UPDATED: {
          actions: 'updateTimerState',
        },
        PREV: {
          target: 'Add_Remaining_Water',
        },
        NEXT: {
          target: 'Done',
        },
      },
    },
    Done: {},
  },
  on: {
    RESET: {
      target: 'Start',
    },
    RESUME: {
      actions: 'sendResumeEvent',
    },
    PAUSE: {
      actions: 'sendPauseEvent',
    },
  },
}, {
  actions: {
    handleFlOzChange,
    updateRemainingMs: assign({
      remaining_ms: (_context, event) => event.remaining_ms,
    }),
    updateTimerState: assign({
      timerButtonState: (_context, event) => event.timerButtonState,
    }),
    resetRemainingMs: assign({
      remaining_ms: undefined,
    }),
    sendResumeEvent: send('RESUME', {
      to: (context, event) => context[event.timerName],
    }),
    sendPauseEvent: send('PAUSE', {
      to: (context, event) => context[event.timerName],
    }),
  },
});

export default FrenchPressByCoffeeCupGuruMachine;
