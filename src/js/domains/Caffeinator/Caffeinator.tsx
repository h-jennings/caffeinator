import React from 'react';
import { useParams } from 'react-router-dom';

import { BrewMethods } from '@/data/methods.model';

import { FourZeroFour } from '@domains/404/FourZeroFour';
import FrenchPress from '@domains/brewMethods/FrenchPress';
import Chemex from '@domains/brewMethods/Chemex';

import { ScrollToTopOnMount } from '@components/ScrollToTopOnMount/ScrollToTopOnMount';

export function Caffeinator({ brewMethods }: BrewMethods) {
  const { method } = useParams<{ method: string }>();
  const pageMethod = brewMethods.find(
    (brewMethod) => brewMethod.path === method,
  );
  const recipes = pageMethod?.recipes ?? [];

  return (
    <>
      <ScrollToTopOnMount />
      {(() => {
        switch (method) {
          case 'french-press':
            return <FrenchPress recipes={recipes} />;

          case 'chemex':
            return <Chemex recipes={recipes} />;

          default:
            return <FourZeroFour />;
        }
      })()}
    </>
  );
}
