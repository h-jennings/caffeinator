import { BrewMethod } from './methods.model';

export const methods: BrewMethod[] = [
  {
    type: 'French Press',
    path: 'french-press',
    icon: {
      src: '/icons/frenchPress.svg',
      width: '60px',
      height: '80px',
    },
    recipes: [
      {
        name: 'French press by coffee.cup.guru',
        path: 'french-press-by-coffee-cup-guru',
        timeInSeconds: 240,
        ratio: 1.875,
        temp: 205,
        grindRange: 'medium-coarse',
      },
      {
        name: 'Perfect French press coffee',
        path: 'perfect-french-press-coffee',
        timeInSeconds: 330,
        ratio: 1.79,
        temp: 200,
        grindRange: 'coarse',
      },
    ],
  },
  {
    type: 'Chemex',
    path: 'chemex',
    icon: {
      src: '/icons/chemex.svg',
      width: '58px',
      height: '80px',
    },
    recipes: [
      {
        name: 'Chemex sweet and easy',
        path: 'chemex-sweet-and-easy',
        timeInSeconds: 260,
        ratio: 1.99,
        temp: 196,
        grindRange: 'medium',
      },
      {
        name: 'Chemex by coffee.cup.guru',
        path: 'chemex-by-coffee-cup-guru',
        timeInSeconds: 280,
        ratio: 1.875,
        temp: 205,
        grindRange: 'medium',
      },
    ],
  },
];
