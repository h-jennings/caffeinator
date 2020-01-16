import { Machine, assign } from 'xstate';

const handleFlOzChange = assign({
  fluidOunces: (_context, event) => {
    const { fluidOunces } = event;

    return fluidOunces;
  },
  grams: (_context, event) => {
    const { ratio, fluidOunces } = event;

    return Math.round(fluidOunces * ratio);
  },
});

const FrenchPressByCoffeeCupGuruMachine = new Machine({
  id: 'FrenchPressByCoffeeCupGuruMachine',
  initial: 'Start',
  context: {
    fluidOunces: 8,
    grams: 15,
  },
  states: {
    Start: {
      on: {
        CHANGE: {
          target: 'Start',
          actions: handleFlOzChange,
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
      on: {
        PREV: {
          target: 'Add_Water',
        },
        NEXT: {
          target: 'Add_Remaining_Water',
        },
      },
    },
    Add_Remaining_Water: {
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
      on: {
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
});

export default FrenchPressByCoffeeCupGuruMachine;
