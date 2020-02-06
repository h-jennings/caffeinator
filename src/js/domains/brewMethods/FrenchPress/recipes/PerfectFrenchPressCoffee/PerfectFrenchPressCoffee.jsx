import React from 'react';
import MainContainer from '../../../../../components/MainContainer';

function PerfectFrenchPressCoffee({ pageRecipe }) {
  const { name } = pageRecipe;
  return (
    <MainContainer headline={name} />
  );
}

export default PerfectFrenchPressCoffee;
