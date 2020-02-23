import { assign } from 'xstate';
import timerButtonStates from './timerButtonStates';

const timerUIActionsConfig = {
  setUIStateToPause: assign({
    timerButtonState: timerButtonStates.pause,
  }),
  setUIStateToPlay: assign({
    timerButtonState: timerButtonStates.play,
  }),
};

export default timerUIActionsConfig;
