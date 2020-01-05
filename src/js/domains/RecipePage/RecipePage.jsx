import React from 'react';
import {
  useLocation, Switch, Route, useRouteMatch, Link,
} from 'react-router-dom';
import Caffeinator from '../Caffeinator';
import ScrollToTopOnMount from '../../components/ScrollToTopOnMount';
import MainContainer from '../../components/MainContainer';
import RecipePageListItem from './RecipePageListItem';
import FourZeroFour from '../404';

function RecipePage({ methods }) {
  const location = useLocation();
  const match = useRouteMatch();
  const pathName = location.pathname;
  const pageMethod = methods.filter((method) => method.path === pathName);

  return (
    <Switch>
      <Route exact path={`${match.path}/:recipeId`}>
        <Caffeinator />
      </Route>
      <Route exact path={match.path}>
        {pageMethod.length >= 1 ? (
          <>
            <ScrollToTopOnMount />
            <MainContainer headline={`${pageMethod[0].type} Recipes`}>
              <ul>
                {pageMethod[0].recipes.map((recipe) => (
                  <Link key={recipe.name} to={`${match.url}/${recipe.path}`}>
                    <RecipePageListItem recipe={recipe} icon={pageMethod[0].icon} />
                  </Link>
                ))}
              </ul>
            </MainContainer>
          </>
        ) : <FourZeroFour />}
      </Route>
    </Switch>
  );
}

export default RecipePage;
