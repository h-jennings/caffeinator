import React from 'react';
import MainContainerHeadlineOuter from '../../../../../components/MainContainerHeadlineOuter';

function AeropressBrewRecipe({ pageRecipe }) {
  const { name } = pageRecipe;
  return (
    <MainContainerHeadlineOuter headline={name} />
  );
}

export default AeropressBrewRecipe;
