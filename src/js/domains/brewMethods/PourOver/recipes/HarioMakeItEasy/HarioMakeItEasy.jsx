import React from 'react';
import MainContainerHeadlineOuter from '../../../../../components/MainContainerHeadlineOuter';

function HarioMakeItEasy({ pageRecipe }) {
  const { name } = pageRecipe;
  return (
    <MainContainerHeadlineOuter headline={name} />
  );
}

export default HarioMakeItEasy;
