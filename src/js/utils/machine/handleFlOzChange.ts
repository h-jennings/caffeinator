import { assign } from 'xstate';

const handleFlOzChange = assign({
  fluidOunces: (_context, event: { fluidOunces: number }) => {
    const { fluidOunces } = event;

    return fluidOunces;
  },
  grams: (_context, event: { ratio: number; fluidOunces: number }) => {
    const { ratio, fluidOunces } = event;
    return Math.round(fluidOunces * ratio);
  },
});

export default handleFlOzChange;
