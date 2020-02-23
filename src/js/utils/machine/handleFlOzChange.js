import { assign } from 'xstate';

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

export default handleFlOzChange;
