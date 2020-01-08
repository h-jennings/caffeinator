import React from 'react';
import MainContainer from '../../../../../components/MainContainer';

function ChemexSweetAndEasy({ pageRecipe }) {
  const { name } = pageRecipe;
  return (
    <MainContainer headline={name} />
  );
}

export default ChemexSweetAndEasy;
