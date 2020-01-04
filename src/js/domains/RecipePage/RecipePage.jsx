import React from 'react';
import { useLocation } from 'react-router-dom';
import MainContainer from '../../components/MainContainer';
import RecipePageListItem from './RecipePageListItem';

function RecipePage({ methods }) {
  const location = useLocation();
  const pathName = location.pathname;
  const pageMethod = methods.filter((method) => method.path === pathName);

  return (
    <>
      {pageMethod.length >= 1 ? (
        <MainContainer headline={`${pageMethod[0].type} Recipes`}>
          <ul>
            {pageMethod[0].recipes.map((recipe) => (
              <RecipePageListItem key={recipe.name} recipe={recipe} icon={pageMethod[0].icon} />
            ))}
          </ul>
        </MainContainer>
      ) : (
          <h1 style={{ color: 'var(--yellow)' }}>
            No Recipes Found for
          {' '}
            <code>{pathName}</code>
          </h1>
        )}
    </>
  );
}

export default RecipePage;
