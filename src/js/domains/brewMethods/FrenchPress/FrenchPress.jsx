import React, { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import FourZeroFour from '../../404';
import Loading from '../../../components/Loading';
const FrenchPressByCoffeeCupGuru = lazy(() => import('./recipes/FrenchPressByCoffeeCupGuru'));
const PerfectFrenchPressCoffee = lazy(() => import('./recipes/PerfectFrenchPressCoffee'));

function FrenchPress({ recipes }) {
  const { recipePath } = useParams();
  const pageRecipe = recipes.find((recipe) => recipe.path === recipePath);

  return (
    <>
      {
        (() => {
          switch (pageRecipe.path) {
            case 'french-press-by-coffee-cup-guru':
              return (
                <Suspense fallback={<Loading />}>
                  <FrenchPressByCoffeeCupGuru pageRecipe={pageRecipe} />
                </Suspense>
              );
            case 'perfect-french-press-coffee':
              return (
                <Suspense fallback={<Loading />}>
                  <PerfectFrenchPressCoffee pageRecipe={pageRecipe} />
                </Suspense>
              );

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

export default FrenchPress;
