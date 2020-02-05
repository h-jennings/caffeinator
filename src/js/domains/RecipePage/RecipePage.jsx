import React from 'react';
import PropTypes from 'prop-types';
import {
  useRouteMatch,
  Link,
  useParams,
} from 'react-router-dom';
import styles from './RecipePage.module.scss';
import ScrollToTopOnMount from '../../components/ScrollToTopOnMount';
import MainContainerHeadlineOuter from '../../components/MainContainerHeadlineOuter';
import RecipePageListItem from './RecipePageListItem';
import FourZeroFour from '../404';

function RecipePage({ brewMethods }) {
  const { method } = useParams();
  const match = useRouteMatch();
  const pageMethod = brewMethods.find((brewMethod) => brewMethod.path === method);

  return (
    <>
      {pageMethod ? (
        <>
          <ScrollToTopOnMount />
          <MainContainerHeadlineOuter headline={`${pageMethod.type} Recipes`}>
            <ul>
              {pageMethod.recipes.map((recipe) => (
                <Link key={recipe.name} to={`${match.url}/${recipe.path}`} className={styles.listItemLink}>
                  <RecipePageListItem recipe={recipe} icon={pageMethod.icon} />
                </Link>
              ))}
            </ul>
          </MainContainerHeadlineOuter>
        </>
      ) : <FourZeroFour />}
    </>
  );
}

RecipePage.propTypes = {
  brewMethods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RecipePage;
