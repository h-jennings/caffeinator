import React from 'react';
import MainContainerHeadlineOuter from '../../../../../components/MainContainerHeadlineOuter';

function PerfectFrenchPressCoffee({ pageRecipe }) {
  const { name } = pageRecipe;
  return (
    <MainContainerHeadlineOuter headline={name} />
  );
}

export default PerfectFrenchPressCoffee;
