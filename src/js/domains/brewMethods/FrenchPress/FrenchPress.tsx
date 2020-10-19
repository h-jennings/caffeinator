import React, { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { FourZeroFour } from '@domains/404/FourZeroFour';
import { Loading } from '@components/Loading/Loading';
import { Recipe } from '@/data/methods.model';

const FrenchPressByCoffeeCupGuru = lazy(
  () =>
    import('./recipes/FrenchPressByCoffeeCupGuru/FrenchPressByCoffeeCupGuru'),
);
const PerfectFrenchPressCoffee = lazy(
  () => import('./recipes/PerfectFrenchPressCoffee'),
);

type FrenchPressProps = {
  recipes: Recipe[];
};

export function FrenchPress({ recipes }: FrenchPressProps) {
  const { recipePath } = useParams<{ recipePath: string }>();
  const pageRecipe = recipes.find((recipe) => recipe.path === recipePath);

  if (!pageRecipe?.path) {
    return <FourZeroFour />;
  }

  return (
    <>
      {(() => {
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
      })()}
    </>
  );
}
