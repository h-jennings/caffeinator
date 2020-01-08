import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import FourZeroFour from '../../404';
import ChemexSweetAndEasy from './recipes/ChemexSweetAndEasy';
import ChemexByCoffeeCupGuru from './recipes/ChemexByCoffeeCupGuru';
import ChemexHigherTemperature from './recipes/ChemexHigherTemperature';
import ChemexLongerBloom from './recipes/ChemexLongerBloom';

function Chemex({ recipes }) {
  const { recipePath } = useParams();
  const pageRecipe = recipes.find((recipe) => recipe.path === recipePath);

  return (
    <>
      {
        (() => {
          switch (pageRecipe.path) {
            case 'chemex-sweet-and-easy':
              return <ChemexSweetAndEasy pageRecipe={pageRecipe} />;

            case 'chemex-by-coffee-cup-guru':
              return <ChemexByCoffeeCupGuru pageRecipe={pageRecipe} />;

            case 'chemex-higher-temperature':
              return <ChemexHigherTemperature pageRecipe={pageRecipe} />;

            case 'chemex-longer-bloom':
              return <ChemexLongerBloom pageRecipe={pageRecipe} />;

            default:
              return <FourZeroFour />;
          }
        })()
      }
    </>
  );
}

Chemex.propTypes = {
  // bla: PropTypes.string,
};

Chemex.defaultProps = {
  // bla: 'test',
};

export default Chemex;
