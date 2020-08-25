import React from 'react';
import { Link } from 'react-router-dom';
import MainContainer from '../../components/MainContainer';
import styles from './Home.module.scss';
import BrewMethodThumbnail from './BrewMethodThumbnail';

function Home({ brewMethods }) {
  console.log(brewMethods);
  return (
    <MainContainer headline="Select a brew method.">
      <ul className={styles.methodsContainer}>
        {brewMethods.map((method) => (
          <Link key={method.path} to={`/${method.path}`}>
            <BrewMethodThumbnail data={method} />
          </Link>
        ))}
      </ul>
    </MainContainer>
  );
}

export default Home;
