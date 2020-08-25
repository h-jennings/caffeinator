import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import FourZeroFour from '../../404';
import PeetsPourOver from './recipes/PeetsPourOver';
import HarioMakeItEasy from './recipes/HarioMakeItEasy';

function PourOver({ recipes }) {
  const { recipePath } = useParams();
  const pageRecipe = recipes.find((recipe) => recipe.path === recipePath);

  return (
    <>
      {(() => {
        switch (pageRecipe.path) {
          case 'peets-pour-over':
            return <PeetsPourOver pageRecipe={pageRecipe} />;

          case 'hario-make-it-easy':
            return <HarioMakeItEasy pageRecipe={pageRecipe} />;

          default:
            return <FourZeroFour />;
        }
      })()}
    </>
  );
}

PourOver.propTypes = {
  // bla: PropTypes.string,
};

PourOver.defaultProps = {
  // bla: 'test',
};

export default PourOver;
