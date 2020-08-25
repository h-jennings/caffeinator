import React from 'react';
import MainContainer from '../../../../../components/MainContainer';

function ChemexByCoffeeCupGuru({ pageRecipe }) {
  const { name } = pageRecipe;
  return <MainContainer headline={name} />;
}

export default ChemexByCoffeeCupGuru;
