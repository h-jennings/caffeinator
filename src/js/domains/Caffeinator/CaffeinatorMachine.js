import { Machine } from 'xstate';

const dataCollectionStates = {
  id: 'dataCollectionStates',
  initial: 'idle',
  states: {
    idle: {
      on: {
        CHANGE: {
          target: 'idle',
          actions: ['updateValue'],
        },
      },
    },
  },
};

const Caffeinator = new Machine({
  id: 'Caffeinator',
  initial: 'idle',
  context: {
    cupAmount: 1,
  },
  states: {
    idle: {
      on: {
        START: {
          target: 'start',
        },
      },
    },
    start: {
      on: {
        MAKE_COFFEE: {
          target: 'Grind_Beans',
        },
      },
      ...dataCollectionStates,
    },
    Grind_Beans: {
      on: {
        RESET: 'idle',
        NEXT: {
          target: 'Add_Water',
        },
        PREV: 'start',
      },
    },
    Add_Water: {
      on: {
        RESET: 'idle',
        NEXT: {
          target: 'Stir',
        },
        PREV: 'Grind_Beans',
      },
    },
    Stir: {
      entry: 'createTimer',
      on: {
        RESET: 'idle',
        NEXT: {
          target: 'Add_Remaining_Water',
        },
        PREV: 'Add_Water',
      },
    },
    Add_Remaining_Water: {
      on: {
        RESET: 'idle',
        NEXT: {
          target: 'Wait',
        },
        PREV: 'Stir',
      },
    },
    Wait: {
      entry: 'createTimer',
      on: {
        RESET: 'idle',
        NEXT: 'Finished',
        PREV: 'Add_Remaining_Water',
      },
    },
    Finished: {
      type: 'final',
      on: {
        RESET: 'idle',
        PREV: 'Wait',
      },
    },
  },
});

export default Caffeinator;
