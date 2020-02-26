import {
  Machine,
  assign,
  spawn,
  send,
} from 'xstate';
import TimerMachine from '../../../../../components/Timer/TimerMachine';
import recipeActionsConfig from '../../../../../utils/machine/recipeActionsConfig';
import timerUIActionsConfig from '../../../../../utils/machine/timerUIActionsConfig';
import timerButtonStates from '../../../../../utils/machine/timerButtonStates';
import roundToNearestTenth from '../../../../../utils/global/roundToNearestTenth';

const states = {
  Start: 'Start',
  Grind: 'Grind',
  Rinse_Filter: 'Rinse_Filter',
  Add_Grinds_And_Water: 'Add_Grinds_And_Water',
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
          target: states.Add_Grinds_And_Water,
        },
      },
    },
    Add_Grinds_And_Water: {
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
          fluidOuncesDisplayValue: (context, _event) => roundToNearestTenth(context.fluidOunces * 0.14),
        }),
        assign({
          bloomTimer: () => spawn(TimerMachine.withContext({
            update_frequency_ms: 100,
            duration_ms: 45000,
          }), { sync: false, autoForward: false, name: 'bloomTimer' }),
        }),
        send('START', { to: 'bloomTimer' }),
      ],
      exit: [
        (context, _event) => context.bloomTimer.stop(),
        'resetRemainingMs',
        'setUIStateToPause',
      ],
      on: {
        TIMER_UPDATED: {
          actions: 'updateRemainingMs',
        },
        TIMER_STATE_UPDATED: {
          actions: 'updateTimerState',
        },
        PREV: {
          target: states.Add_Grinds_And_Water,
        },
        NEXT: {
          target: states.Add_Remaining_Water,
        },
      },
    },
    Add_Remaining_Water: {
      entry: [
        assign({
          fluidOuncesDisplayValue: (context, _event) => roundToNearestTenth(context.fluidOunces),
        }),
        assign({
          addWaterTimer: () => spawn(TimerMachine.withContext({
            update_frequency_ms: 100,
            duration_ms: 150000,
          }), { sync: false, autoForward: false, name: 'addWaterTimer' }),
        }),
        send('START', { to: 'addWaterTimer' }),
      ],
      exit: [
        (context, _event) => context.addWaterTimer.stop(),
        'resetRemainingMs',
        'setUIStateToPause',
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
    ...recipeActionsConfig,
    ...timerUIActionsConfig,
  },
});

export default ChemexSweetAndEasyMachine;
