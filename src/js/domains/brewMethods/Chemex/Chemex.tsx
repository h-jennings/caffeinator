import React from 'react';
import { useParams } from 'react-router-dom';
import { FourZeroFour } from '@domains/404/FourZeroFour';
import ChemexSweetAndEasy from './recipes/ChemexSweetAndEasy';
import ChemexByCoffeeCupGuru from './recipes/ChemexByCoffeeCupGuru';
import { Recipe } from '@/data/methods.model';

type ChemexProps = {
  recipes: Recipe[];
};

export function Chemex({ recipes }: ChemexProps) {
  const { recipePath } = useParams<{ recipePath: string }>();
  const pageRecipe = recipes.find((recipe) => recipe.path === recipePath);

  if (!pageRecipe?.path) {
    return <FourZeroFour />;
  }

  return (
    <>
      {(() => {
        switch (pageRecipe.path) {
          case 'chemex-sweet-and-easy':
            return <ChemexSweetAndEasy pageRecipe={pageRecipe} />;

          case 'chemex-by-coffee-cup-guru':
            return <ChemexByCoffeeCupGuru pageRecipe={pageRecipe} />;

          default:
            return <FourZeroFour />;
        }
      })()}
    </>
  );
}
