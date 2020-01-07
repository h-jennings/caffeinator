import React from 'react';
import MainContainer from '../../../../../components/MainContainer';

function AeropressBasicRecipe({ pageRecipe }) {
  const { name } = pageRecipe;
  return (
    <MainContainer headline={name} />
  );
}

export default AeropressBasicRecipe;
