import React from 'react';
import PropTypes from 'prop-types';
import { useMachine } from '@xstate/react';
import PerfectFrenchPressCoffeeMachine from './PerfectFrenchPressCoffeeMachine';
import StateContainer from '../../../../../components/StateContainer';
import StartState from '../../../../../components/GlobalStates/StartState';
import GrindState from '../../../../../components/GlobalStates/GrindState';
import AddWaterState from './States/AddWaterState';
import BloomState from './States/BloomState/BloomState';


function PerfectFrenchPressCoffee({ pageRecipe }) {
  const [current, send] = useMachine(PerfectFrenchPressCoffeeMachine);
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

            case current.matches('Bloom'):
              return (
                <StateContainer
                  headline={name}
                  send={send}
                  current={current}
                  forwardBackBtns
                >
                  <BloomState current={current} send={send} />
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

PerfectFrenchPressCoffee.propTypes = {
  pageRecipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ratio: PropTypes.number.isRequired,
    grindRange: PropTypes.string.isRequired,
  }).isRequired,
};

export default PerfectFrenchPressCoffee;
