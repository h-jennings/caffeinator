import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import FourZeroFour from '../404';
import ScrollToTopOnMount from '../../components/ScrollToTopOnMount';
import AeroPress from '../brewMethods/AeroPress';
import FrenchPress from '../brewMethods/FrenchPress';
import Chemex from '../brewMethods/Chemex';
import PourOver from '../brewMethods/PourOver';

function Caffeinator({ brewMethods }) {
  const { method } = useParams();
  const pageMethod = brewMethods.find((brewMethod) => brewMethod.path === method);
  const { recipes } = pageMethod;

  return (
    <>
      <ScrollToTopOnMount />
      {
        (() => {
          switch (method) {
            case 'aeropress':
              return <AeroPress recipes={recipes} />;

            case 'french-press':
              return <FrenchPress recipes={recipes} />;

            case 'chemex':
              return <Chemex recipes={recipes} />;

            case 'pour-over':
              return <PourOver recipes={recipes} />;

            default:
              return <FourZeroFour />;
          }
        })()
      }
    </>

  );
}

Caffeinator.propTypes = {
  brewMethods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Caffeinator;
