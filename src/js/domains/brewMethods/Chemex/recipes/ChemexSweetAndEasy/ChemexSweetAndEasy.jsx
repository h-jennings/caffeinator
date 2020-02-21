import React from 'react';
import PropTypes from 'prop-types';
import { useMachine } from '@xstate/react';
import ChemexSweetAndEasyMachine from './ChemexSweetAndEasyMachine';
import StateContainer from '../../../../../components/StateContainer';
import StartState from '../../../../../components/SharedStates/StartState';
import GrindState from '../../../../../components/SharedStates/GrindState';
import RinseFilterState from './States/RinseFilterState';

function ChemexSweetAndEasy({ pageRecipe }) {
  const [current, send] = useMachine(ChemexSweetAndEasyMachine);
  const {
    name,
    ratio,
    temp,
    grindRange,
  } = pageRecipe;

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
                  temp={temp}
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
                  temp={temp}
                  current={current}
                  forwardBackBtns
                >
                  <GrindState current={current} grindRange={grindRange} />
                </StateContainer>
              );

            case current.matches('Rinse_Filter'):
              return (
                <StateContainer
                  headline={name}
                  send={send}
                  temp={temp}
                  current={current}
                  forwardBackBtns
                >
                  <RinseFilterState />
                </StateContainer>
              );

            case current.matches('Add_Water'):
              return (
                <StateContainer
                  headline={name}
                  send={send}
                  temp={temp}
                  current={current}
                  forwardBackBtns
                >
                  Add_Water
                </StateContainer>
              );

            case current.matches('Bloom'):
              return (
                <StateContainer
                  headline={name}
                  send={send}
                  temp={temp}
                  current={current}
                  forwardBackBtns
                >
                  Bloom
                </StateContainer>
              );

            case current.matches('Add_Remaining_Water'):
              return (
                <StateContainer
                  headline={name}
                  send={send}
                  temp={temp}
                  current={current}
                  forwardBackBtns
                >
                  Add_Remaining_Water
                </StateContainer>
              );

            case current.matches('Trash_Filter'):
              return (
                <StateContainer
                  headline={name}
                  send={send}
                  temp={temp}
                  current={current}
                  forwardBackBtns
                >
                  Trash_Filter
                </StateContainer>
              );

            case current.matches('Done'):
              return (
                <StateContainer
                  headline={name}
                  send={send}
                  temp={temp}
                  current={current}
                  forwardBackBtns={false}
                >
                  Done
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

ChemexSweetAndEasy.propTypes = {
  pageRecipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ratio: PropTypes.number.isRequired,
    temp: PropTypes.number.isRequired,
    grindRange: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChemexSweetAndEasy;
