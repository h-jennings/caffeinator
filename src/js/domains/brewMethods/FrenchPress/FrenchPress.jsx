import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import FourZeroFour from '../../404';
import FrenchPressByCoffeeCupGuru from './Recipes/FrenchPressByCoffeeCupGuru';
import PerfectFrenchPressCoffee from './Recipes/PerfectFrenchPressCoffee';

function FrenchPress({ recipes }) {
  const { recipePath } = useParams();
  const pageRecipe = recipes.find((recipe) => recipe.path === recipePath);

  return (
    <>
      {
        (() => {
          switch (pageRecipe.path) {
            case 'french-press-by-coffee-cup-guru':
              return <FrenchPressByCoffeeCupGuru pageRecipe={pageRecipe} />;

            case 'perfect-french-press-coffee':
              return <PerfectFrenchPressCoffee pageRecipe={pageRecipe} />;

            default:
              return <FourZeroFour />;
          }
        })()
      }
    </>
  );
}

FrenchPress.propTypes = {
  recipes: PropTypes.array.isRequired,
};

FrenchPress.defaultProps = {
  // bla: 'test',
};

export default FrenchPress;
