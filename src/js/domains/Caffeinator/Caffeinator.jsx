import React from 'react';
import { useMachine } from '@xstate/react';
import { useParams } from 'react-router-dom';
import FourZeroFour from '../404';
import CaffeinatorMachine from './CaffeinatorMachine';
import CaffeinatorMachineContext from '../../context/CaffeinatorMachineContext';
import ScrollToTopOnMount from '../../components/ScrollToTopOnMount';
import Start from '../Start';
import MakeCoffee from '../MakeCoffee';
import createTimer from '../../utils/createTimer';
import updateValue from '../../utils/updateValue';

function Caffeinator() {
  const { method } = useParams();
  /* const [current, send] = useMachine(CaffeinatorMachine, {
    actions: {
      updateValue,
      createTimer,
    },
  }); */

  return (
    <>
      <ScrollToTopOnMount />
      {
        (() => {
          switch (method) {
            case 'aeropress':
              return <h1>aeropress</h1>;

            case 'french-press':
              return <h1>french-press</h1>;

            case 'chemex':
              return <h1>chemex</h1>;

            case 'pour-over':
              return <h1>pour-over</h1>;

            default:
              return <FourZeroFour />;
          }
        })()
      }
    </>

  );
}

export default Caffeinator;
