import React from 'react';
import { MainContainer } from '@components/MainContainer/MainContainer';

function PeetsPourOver({ pageRecipe }) {
  const { name } = pageRecipe;
  return <MainContainer headline={name} />;
}

export default PeetsPourOver;
