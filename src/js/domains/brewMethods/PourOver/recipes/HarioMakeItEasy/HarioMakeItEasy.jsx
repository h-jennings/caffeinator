import React from 'react';
import MainContainer from '../../../../../components/MainContainer';

function HarioMakeItEasy({ pageRecipe }) {
  const { name } = pageRecipe;
  return <MainContainer headline={name} />;
}

export default HarioMakeItEasy;
