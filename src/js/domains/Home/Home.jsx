import React from 'react';
import { Link } from 'react-router-dom';
import MainContainerHeadlineOuter from '../../components/MainContainerHeadlineOuter';
import styles from './Home.module.scss';
import BrewMethodThumbnail from './BrewMethodThumbnail';

function Home({ brewMethods }) {
  return (
    <MainContainerHeadlineOuter headline="Select a brew method.">
      <ul className={styles.methodsContainer}>
        {brewMethods.map((method) => (
          <Link key={method.path} to={`/${method.path}`}>
            <BrewMethodThumbnail data={method} />
          </Link>
        ))}
      </ul>
    </MainContainerHeadlineOuter>
  );
}

export default Home;
