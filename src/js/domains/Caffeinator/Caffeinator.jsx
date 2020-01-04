import React from 'react';
import { useMachine } from '@xstate/react';
import CaffeinatorMachine from './CaffeinatorMachine';
import CaffeinatorMachineContext from '../../context/CaffeinatorMachineContext';
import Start from '../Start';
import MakeCoffee from '../MakeCoffee';
import createTimer from '../../utils/createTimer';
import updateValue from '../../utils/updateValue';

function Caffeinator() {
  const [current, send] = useMachine(CaffeinatorMachine, {
    actions: {
      updateValue,
      createTimer,
    },
  });

  return (
    <CaffeinatorMachineContext.Provider value={{ current, send }}>
      <>
        {
          (() => {
            switch (true) {
              case current.matches('start'):
                return <Start />;

              case current.matches('Grind_Beans'):
                return <MakeCoffee />;

              default:
                return <div style={{ color: 'white' }}>no match</div>;
            }
          })()
        }
      </>
    </CaffeinatorMachineContext.Provider>
  );
}

export default Caffeinator;
