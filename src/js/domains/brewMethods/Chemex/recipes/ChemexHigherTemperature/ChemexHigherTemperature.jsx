import React from 'react';
import MainContainer from '../../../../../components/MainContainer';

function ChemexHigherTemperature({ pageRecipe }) {
  const { name } = pageRecipe;
  return (
    <MainContainer headline={name} />
  );
}

export default ChemexHigherTemperature;
