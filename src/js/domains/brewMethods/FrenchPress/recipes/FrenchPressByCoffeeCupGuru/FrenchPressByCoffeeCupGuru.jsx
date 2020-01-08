import React from 'react';
import MainContainer from '../../../../../components/MainContainer';

function FrenchPressByCoffeeCupGuru({ pageRecipe }) {
  const { name } = pageRecipe;
  return (
    <MainContainer headline={name} />
  );
}

export default FrenchPressByCoffeeCupGuru;
