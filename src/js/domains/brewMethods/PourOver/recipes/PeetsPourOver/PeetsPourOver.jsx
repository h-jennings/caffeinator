import React from 'react';
import MainContainer from '../../../../../components/MainContainer';

function PeetsPourOver({ pageRecipe }) {
  const { name } = pageRecipe;
  return <MainContainer headline={name} />;
}

export default PeetsPourOver;
