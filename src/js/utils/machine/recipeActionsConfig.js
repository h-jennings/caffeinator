import { send, assign } from 'xstate';
import handleFlOzChange from './handleFlOzChange';

const recipeActionsConfig = {
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
  sendResumeEvent: send('RESUME', {
    to: (context, event) => context[event.timerName],
  }),
  sendPauseEvent: send('PAUSE', {
    to: (context, event) => context[event.timerName],
  }),
};

export default recipeActionsConfig;
