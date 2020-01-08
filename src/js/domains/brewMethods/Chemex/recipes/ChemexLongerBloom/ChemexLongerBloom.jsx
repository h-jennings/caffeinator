import React from 'react';
import MainContainer from '../../../../../components/MainContainer';

function ChemexLongerBloom({ pageRecipe }) {
  const { name } = pageRecipe;
  return (
    <MainContainer headline={name} />
  );
}

export default ChemexLongerBloom;
