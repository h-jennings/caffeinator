import { send } from 'xstate';

const createTimer = (seconds) => {
  let time = seconds;

  const decrease = setInterval(() => {
    time -= 1;
    if (time <= 0) {
      send('NEXT');
      window.clearInterval(decrease);
    }
  }, 1000);
};

export default createTimer;
