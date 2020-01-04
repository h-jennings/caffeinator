import { createContext } from 'react';

const CaffeinatorMachineContext = createContext({
  current: null,
  send: null,
});

export default CaffeinatorMachineContext;
