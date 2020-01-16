import React from 'react';
import PropTypes from 'prop-types';
import { useMachine } from '@xstate/react';
import { AnimatePresence, motion } from 'framer-motion';
import FrenchPressByCoffeeCupGuruMachine from './FrenchPressByCoffeeCupGuruMachine';
import StartState from '../../../../../components/StartState';
import MainContainer from '../../../../../components/MainContainer';
import MachineButton from '../../../../../components/MachineButton';
import GrindState from './States/GrindState/GrindState';


function FrenchPressByCoffeeCupGuru({ pageRecipe }) {
  // Initialize Recipe State Machine
  const [current, send] = useMachine(FrenchPressByCoffeeCupGuruMachine);
  const { name, ratio, grindRange } = pageRecipe;

  const headlineVariants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <MainContainer headline={name}>
      {
        (() => {
          switch (true) {
            case current.matches('Start'):
              return <StartState current={current} send={send} ratio={ratio} />;

            case current.matches('Grind'):
              return <GrindState current={current} send={send} grindRange={grindRange} />;

            case current.matches('Add_Water'):
              return (
                <>
                  <AnimatePresence exitBeforeEnter>
                    <motion.h1 initial="initial" exit="exit" key={current.value} animate="enter" variants={headlineVariants}>Add Water</motion.h1>
                  </AnimatePresence>
                  <MachineButton send={send} eventType="PREV">Prev</MachineButton>
                  <MachineButton send={send} eventType="NEXT">Next</MachineButton>
                  <MachineButton send={send} eventType="RESET">Reset</MachineButton>
                </>
              );

            case current.matches('Stir'):
              return (
                <>
                  <AnimatePresence exitBeforeEnter>
                    <motion.h1 initial="initial" exit="exit" key={current.value} animate="enter" variants={headlineVariants}>Stir</motion.h1>
                  </AnimatePresence>
                  <MachineButton send={send} eventType="PREV">Prev</MachineButton>
                  <MachineButton send={send} eventType="NEXT">Next</MachineButton>
                  <MachineButton send={send} eventType="RESET">Reset</MachineButton>
                </>
              );

            case current.matches('Add_Remaining_Water'):
              return (
                <>
                  <AnimatePresence exitBeforeEnter>
                    <motion.h1 initial="initial" exit="exit" key={current.value} animate="enter" variants={headlineVariants}>Add Remaining Water</motion.h1>
                  </AnimatePresence>
                  <MachineButton send={send} eventType="PREV">Prev</MachineButton>
                  <MachineButton send={send} eventType="NEXT">Next</MachineButton>
                  <MachineButton send={send} eventType="RESET">Reset</MachineButton>
                </>
              );

            case current.matches('Brew'):
              return (
                <>
                  <AnimatePresence exitBeforeEnter>
                    <motion.h1 initial="initial" exit="exit" key={current.value} animate="enter" variants={headlineVariants}>Brew</motion.h1>
                  </AnimatePresence>
                  <MachineButton send={send} eventType="PREV">Prev</MachineButton>
                  <MachineButton send={send} eventType="NEXT">Next</MachineButton>
                  <MachineButton send={send} eventType="RESET">Reset</MachineButton>
                </>
              );

            case current.matches('Done'):
              return (
                <>
                  <AnimatePresence exitBeforeEnter>
                    <motion.h1 initial="initial" exit="exit" key={current.value} animate="enter" variants={headlineVariants}>Done</motion.h1>
                  </AnimatePresence>
                  <MachineButton send={send} eventType="RESET">Reset</MachineButton>
                </>
              );

            default:
              return null;
          }
        })()
      }
    </MainContainer>
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
