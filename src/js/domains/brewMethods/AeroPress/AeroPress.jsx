import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FourZeroFour } from '@domains/404/FourZeroFour';
import AeroPressBasicRecipe from './recipes/AeropressBasicRecipe';
import AeroPressBrewRecipe from './recipes/AeropressBrewRecipe';

function AeroPress({ recipes }) {
  const { recipePath } = useParams();
  const pageRecipe = recipes.find((recipe) => recipe.path === recipePath);

  return (
    <>
      {(() => {
        switch (pageRecipe.path) {
          case 'aeropress-basic-recipe':
            return <AeroPressBasicRecipe pageRecipe={pageRecipe} />;

          case 'aeropress-brew-recipe':
            return <AeroPressBrewRecipe pageRecipe={pageRecipe} />;

          default:
            return <FourZeroFour />;
        }
      })()}
    </>
  );
}

AeroPress.propTypes = {
  // bla: PropTypes.string,
};

AeroPress.defaultProps = {
  // bla: 'test',
};

export default AeroPress;
