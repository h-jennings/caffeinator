import React from 'react';
import gif from '../../../../../../../../images/rinse.gif';
import { ImageContainer } from '@components/ImageContainer/ImageContainer';

function RinseFilterState() {
  return (
    <>
      <h1>Rinse Filter</h1>
      <ImageContainer src={gif} />
    </>
  );
}

export default RinseFilterState;
