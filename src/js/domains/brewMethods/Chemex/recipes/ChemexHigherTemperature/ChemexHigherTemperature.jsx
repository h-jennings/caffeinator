import React from 'react';
import MainContainerHeadlineOuter from '../../../../../components/MainContainerHeadlineOuter';

function ChemexHigherTemperature({ pageRecipe }) {
  const { name } = pageRecipe;
  return (
    <MainContainerHeadlineOuter headline={name} />
  );
}

export default ChemexHigherTemperature;
