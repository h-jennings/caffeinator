import React from 'react';
import { Link } from 'react-router-dom';
import MainContainer from '../../components/MainContainer';
import styles from './Home.module.scss';
import BrewMethodThumbnail from './BrewMethodThumbnail';

function Home({ methods }) {
  return (
    <MainContainer headline="Select a brew method.">
      <ul className={styles.methodsContainer}>
        {methods.map((method) => (
          <Link key={method.path} to={method.path}>
            <BrewMethodThumbnail data={method} />
          </Link>
        ))}
      </ul>
    </MainContainer>
  );
}

export default Home;
