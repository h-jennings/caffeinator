import { assign } from 'xstate';
import { timerButtonStates } from '@/js/utils/machine/timerButtonStates';

export const timerUIActionsConfig = {
  setUIStateToPause: assign({
    timerButtonState: timerButtonStates.pause,
  }),
  setUIStateToPlay: assign({
    timerButtonState: timerButtonStates.play,
  }),
};
