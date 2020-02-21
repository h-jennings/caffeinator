import {
  Machine,
  assign,
  spawn,
  send,
} from 'xstate';
import TimerMachine from '../../../../../components/Timer/TimerMachine';
import timerButtonStates from '../../../../../utils/timerButtonStates';
import handleFlOzChange from '../../../../../utils/handleFlOzChange';
import roundToNearestTenth from '../../../../../utils/roundToNearestTenth';

const PerfectFrenchPressCoffeeMachine = Machine({
  id: 'PerfectFrenchPressCoffeeMachine',
  initial: 'Start',
  context: {
    fluidOunces: 24,
    grams: 43,
    fluidOuncesDisplayValue: null,
    remaining_ms: undefined,
    timerButtonState: timerButtonStates.pause,
  },
  states: {
    Start: {
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
      entry: [
        assign({
          fluidOuncesDisplayValue: (context, _event) => roundToNearestTenth(context.fluidOunces * 0.3333),
        }),
      ],
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
      entry: [
        assign({
          // eslint-disable-next-line arrow-body-style
          fluidOuncesDisplayValue: (context, _event) => roundToNearestTenth(context.fluidOunces * 0.3333),
        }),
      ],
      on: {
        PREV: {
          target: 'Grind',
        },
        NEXT: {
          target: 'Bloom',
        },
      },
    },
    Bloom: {
      entry: [
        assign({
          bloomTimer: () => spawn(TimerMachine.withContext({
            update_frequency_ms: 100,
            duration_ms: 30000,
          }), { sync: false, autoForward: true, name: 'bloomTimer' }),
        }),
        send('START', { to: 'bloomTimer' }),
      ],
      exit: [
        send('RESET', { to: 'bloomTimer' }),
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
          target: 'Stir',
        },
      },
    },
    Stir: {
      entry: [
        assign({
          stirTimer: () => spawn(TimerMachine.withContext({
            update_frequency_ms: 100,
            duration_ms: 10000,
          }), { sync: false, autoForward: true, name: 'stirTimer' }),
        }),
        send('START', { to: 'stirTimer' }),
      ],
      exit: [
        send('RESET', { to: 'stirTimer' }),
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
          target: 'Bloom',
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
        send('RESET', { to: 'brewTimer' }),
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
  },
});

export default PerfectFrenchPressCoffeeMachine;
