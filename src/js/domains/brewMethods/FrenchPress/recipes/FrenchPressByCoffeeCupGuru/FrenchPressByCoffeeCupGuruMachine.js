import { Machine, assign, spawn, send } from 'xstate';
import TimerMachine from '../../../../../components/Timer/TimerMachine';
import recipeActionsConfig from '../../../../../utils/machine/recipeActionsConfig';
import timerUIActionsConfig from '../../../../../utils/machine/timerUIActionsConfig';
import timerButtonStates from '../../../../../utils/machine/timerButtonStates';

const FrenchPressByCoffeeCupGuruMachine = Machine(
  {
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
            fluidOuncesDisplayValue: (context, _event) =>
              context.fluidOunces / 2,
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
            stirTimer: () =>
              spawn(
                TimerMachine.withContext({
                  update_frequency_ms: 100,
                  duration_ms: 15000,
                }),
                { sync: false, autoForward: false, name: 'stirTimer' },
              ),
          }),
          send('START', { to: 'stirTimer' }),
        ],
        exit: [
          (context, _event) => context.stirTimer.stop(),
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
            brewTimer: () =>
              spawn(
                TimerMachine.withContext({
                  update_frequency_ms: 100,
                  duration_ms: 240000,
                }),
                { sync: false, autoForward: false, name: 'brewTimer' },
              ),
          }),
          send('START', { to: 'brewTimer' }),
        ],
        exit: [
          (context, _event) => context.brewTimer.stop(),
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
  },
  {
    actions: {
      ...recipeActionsConfig,
      ...timerUIActionsConfig,
    },
  },
);

export default FrenchPressByCoffeeCupGuruMachine;
