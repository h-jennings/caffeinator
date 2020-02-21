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

const states = {
  Start: 'Start',
  Grind: 'Grind',
  Rinse_Filter: 'Rinse_Filter',
  Add_Water: 'Add_Water',
  Bloom: 'Bloom',
  Add_Remaining_Water: 'Add_Remaining_Water',
  Trash_Filter: 'Trash_Filter',
  Done: 'Done',
};


const ChemexSweetAndEasyMachine = Machine({
  id: 'ChemexSweetAndEasyMachine',
  initial: states.Start,
  context: {
    fluidOunces: 24,
    grams: 48,
    fluidOuncesDisplayValue: null,
    remaining_ms: undefined,
    timerButtonState: timerButtonStates.pause,
  },
  states: {
    Start: {
      on: {
        CHANGE: {
          target: states.Start,
          actions: 'handleFlOzChange',
        },
        NEXT: {
          target: states.Grind,
        },
      },
    },
    Grind: {
      entry: [
        assign({
          fluidOuncesDisplayValue: (context, _event) => roundToNearestTenth(context.fluidOunces * 0.14),
        }),
      ],
      on: {
        PREV: {
          target: states.Start,
        },
        NEXT: {
          target: states.Rinse_Filter,
        },
      },
    },
    Rinse_Filter: {
      on: {
        PREV: {
          target: states.Grind,
        },
        NEXT: {
          target: states.Add_Water,
        },
      },
    },
    Add_Water: {
      on: {
        PREV: {
          target: states.Rinse_Filter,
        },
        NEXT: {
          target: states.Bloom,
        },
      },
    },
    Bloom: {
      entry: [
        assign({
          bloomTimer: () => spawn(TimerMachine.withContext({
            update_frequency_ms: 100,
            duration_ms: 45000,
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
          target: states.Add_Water,
        },
        NEXT: {
          target: states.Add_Remaining_Water,
        },
      },
    },
    Add_Remaining_Water: {
      entry: [
        assign({
          addWaterTimer: () => spawn(TimerMachine.withContext({
            update_frequency_ms: 100,
            duration_ms: 150000,
          }), { sync: false, autoForward: true, name: 'addWaterTimer' }),
        }),
        send('START', { to: 'addWaterTimer' }),
      ],
      exit: [
        send('RESET', { to: 'addWaterTimer' }),
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
          target: states.Bloom,
        },
        NEXT: {
          target: 'Trash_Filter',
        },
      },
    },
    Trash_Filter: {
      on: {
        PREV: {
          target: states.Add_Remaining_Water,
        },
        NEXT: {
          target: states.Done,
        },
      },
    },
    Done: {},
  },
  on: {
    RESET: {
      target: states.Start,
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

export default ChemexSweetAndEasyMachine;
