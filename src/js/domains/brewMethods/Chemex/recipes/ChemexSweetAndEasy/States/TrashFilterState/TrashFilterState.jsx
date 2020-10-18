import React from 'react';
import gif from '@/images/oscar.gif';
import { ImageContainer } from '@components/ImageContainer/ImageContainer';

function TrashFilterState() {
  return (
    <>
      <h1>Trash Filter</h1>
      <ImageContainer src={gif} />
    </>
  );
}

export default TrashFilterState;
