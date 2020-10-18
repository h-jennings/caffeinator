import React from 'react';
import { useRouteMatch, Link, useParams } from 'react-router-dom';
import styles from './RecipePage.module.scss';
import { ScrollToTopOnMount } from '@components/ScrollToTopOnMount/ScrollToTopOnMount';
import { MainContainer } from '@components/MainContainer/MainContainer';
import { RecipePageListItem } from './RecipePageListItem/RecipePageListItem';
import { FourZeroFour } from '@domains/404/FourZeroFour';
import { BrewMethods } from '@/data/methods.model';

export function RecipePage({ brewMethods }: BrewMethods) {
  const { method } = useParams<{ method: string }>();
  const match = useRouteMatch();
  const pageMethod = brewMethods.find(
    (brewMethod) => brewMethod.path === method,
  );

  return (
    <>
      {pageMethod ? (
        <>
          <ScrollToTopOnMount />
          <MainContainer headline={`${pageMethod.type} Recipes`}>
            <ul>
              {pageMethod.recipes.map((recipe) => (
                <Link
                  key={recipe.name}
                  to={`${match.url}/${recipe.path}`}
                  className={styles.listItemLink}
                >
                  <RecipePageListItem recipe={recipe} icon={pageMethod.icon} />
                </Link>
              ))}
            </ul>
          </MainContainer>
        </>
      ) : (
        <FourZeroFour />
      )}
    </>
  );
}
