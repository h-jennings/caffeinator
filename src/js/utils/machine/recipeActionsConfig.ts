import { send, assign } from 'xstate';
import handleFlOzChange from './handleFlOzChange';

const recipeActionsConfig = {
  handleFlOzChange,
  updateRemainingMs: assign({
    remaining_ms: (_context, event: any) => event.remaining_ms,
  }),
  updateTimerState: assign({
    timerButtonState: (_context, event: any) => event.timerButtonState,
  }),
  resetRemainingMs: assign({
    remaining_ms: undefined,
  }),
  sendResumeEvent: send('RESUME', {
    to: (context: any, event: any) => context[event.timerName],
  }),
  sendPauseEvent: send('PAUSE', {
    to: (context: any, event: any) => context[event.timerName],
  }),
};

export default recipeActionsConfig;
