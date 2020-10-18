import React from 'react';
import { MainContainer } from '@components/MainContainer/MainContainer';

function AeropressBrewRecipe({ pageRecipe }) {
  const { name } = pageRecipe;
  return <MainContainer headline={name} />;
}

export default AeropressBrewRecipe;
