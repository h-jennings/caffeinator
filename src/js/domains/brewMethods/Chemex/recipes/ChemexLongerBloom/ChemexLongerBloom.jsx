import React from 'react';
import MainContainerHeadlineOuter from '../../../../../components/MainContainerHeadlineOuter';

function ChemexLongerBloom({ pageRecipe }) {
  const { name } = pageRecipe;
  return (
    <MainContainerHeadlineOuter headline={name} />
  );
}

export default ChemexLongerBloom;
