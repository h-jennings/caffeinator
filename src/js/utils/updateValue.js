import { assign } from 'xstate';

const updateValue = assign({
  cupAmount: (_context, event) => {
    const { cupAmount } = event;

    return cupAmount;
  },
});

export default updateValue;
