import { Machine } from 'xstate';

/* const dataCollectionStates = {
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
}; */

const Caffeinator = new Machine({
  id: 'Caffeinator',
  initial: 'init',
  context: {
    cupAmount: 1,
  },
  states: {
    init: {
      on: {
        '': [
          { cond: { type: 'isAeropressPage' }, target: 'aeropress' },
          { cond: { type: 'isFrenchPressPage' }, target: 'frenchPress' },
          { cond: { type: 'isChemexPage' }, target: 'chemex' },
          { cond: { type: 'isPourOverPage' }, target: 'pourOver' },
          { target: 'unknownPage' },
        ],
      },
    },
    aeropress: {
      on: {
        '': [
          { cond: { type: 'recipeIsAeropressBasicRecipe' }, target: 'aeropress' },
        ],
      },
    },
    frenchPress: {

    },
    chemex: {

    },
    pourOver: {

    },
    unknownPage: {

    },
  },
}, {
  guards: {
    // Method Guards
    isAeropressPage: (context, _event) => context.method === 'aeropress',
    isFrenchPressPage: (context, _event) => context.method === 'french-press',
    isChemexPage: (context, _event) => context.method === 'chemex',
    isPourOverPage: (context, _event) => context.method === 'pour-over',

    // Recipe Guards
    recipeIsPeetsPourOver: (context, _event) => context.recipe === 'peets-pour-over',
    recipeIsAeropressBasicRecipe: (context, _event) => context.recipe === 'aeropress-basic-recipe',
  },
});

export default Caffeinator;
