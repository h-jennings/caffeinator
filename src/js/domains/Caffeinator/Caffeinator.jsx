import React from 'react';
import { useMachine } from '@xstate/react';
import { useParams } from 'react-router-dom';
import FourZeroFour from '../404';
import CaffeinatorMachine from './CaffeinatorMachine';
import ScrollToTopOnMount from '../../components/ScrollToTopOnMount';

function Caffeinator() {
  const { method } = useParams();

  const [current, send] = useMachine(CaffeinatorMachine, {
    context: {
      method,
    },
  });

  return (
    <>
      <ScrollToTopOnMount />
      {
        (() => {
          switch (true) {
            case current.matches('aeropress'):
              return <h1>aeropress</h1>;

            case current.matches('frenchPress'):
              return <h1>french-press</h1>;

            case current.matches('chemex'):
              return <h1>chemex</h1>;

            case current.matches('pourOver'):
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
