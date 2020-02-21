import React from 'react';
import PropTypes from 'prop-types';
import { useMachine } from '@xstate/react';
import FrenchPressByCoffeeCupGuruMachine from './FrenchPressByCoffeeCupGuruMachine';
import AddRemainingWaterState from './States/AddRemainingWaterState';
import StartState from '../../../../../components/SharedStates/StartState';
import GrindState from '../../../../../components/SharedStates/GrindState';
import StirState from '../../../../../components/SharedStates/StirState';
import AddWaterState from '../../../../../components/SharedStates/AddWaterState';
import BrewState from '../../../../../components/SharedStates/BrewState';
import DoneState from '../../../../../components/SharedStates/DoneState';
import StateContainer from '../../../../../components/StateContainer';


function FrenchPressByCoffeeCupGuru({ pageRecipe }) {
  // Initialize Recipe State Machine
  const [current, send] = useMachine(FrenchPressByCoffeeCupGuruMachine);
  const { name, ratio, grindRange } = pageRecipe;

  return (
    <>
      {
        (() => {
          switch (true) {
            case current.matches('Start'):
              return (
                <StateContainer
                  headline={name}
                  send={send}
                  current={current}
                  forwardBackBtns={false}
                >
                  <StartState current={current} send={send} ratio={ratio} />
                </StateContainer>
              );

            case current.matches('Grind'):
              return (
                <StateContainer
                  headline={name}
                  send={send}
                  current={current}
                  forwardBackBtns
                >
                  <GrindState current={current} grindRange={grindRange} />
                </StateContainer>
              );

            case current.matches('Add_Water'):
              return (
                <StateContainer
                  headline={name}
                  send={send}
                  current={current}
                  forwardBackBtns
                >
                  <AddWaterState current={current} />
                </StateContainer>
              );

            case current.matches('Stir'):
              return (
                <StateContainer
                  headline={name}
                  send={send}
                  current={current}
                  forwardBackBtns
                >
                  <StirState send={send} current={current} ms={15000} />
                </StateContainer>
              );

            case current.matches('Add_Remaining_Water'):
              return (
                <StateContainer
                  headline={name}
                  send={send}
                  current={current}
                  forwardBackBtns
                >
                  <AddRemainingWaterState current={current} />
                </StateContainer>
              );

            case current.matches('Brew'):
              return (
                <StateContainer
                  headline={name}
                  send={send}
                  current={current}
                  forwardBackBtns
                >
                  <BrewState send={send} current={current} ms={240000} />
                </StateContainer>
              );

            case current.matches('Done'):
              return (
                <StateContainer
                  headline={name}
                  send={send}
                  current={current}
                  forwardBackBtns={false}
                >
                  <DoneState send={send} />
                </StateContainer>
              );

            default:
              return null;
          }
        })()
      }
    </>
  );
}

FrenchPressByCoffeeCupGuru.propTypes = {
  pageRecipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ratio: PropTypes.number.isRequired,
    grindRange: PropTypes.string.isRequired,
  }).isRequired,
};

export default FrenchPressByCoffeeCupGuru;
