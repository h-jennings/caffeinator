export type GrindRanges = 'medium-coarse' | 'medium' | 'coarse';

export type Recipe = {
  name: string;
  path: string;
  timeInSeconds: number;
  ratio: number;
  temp: number;
  grindRange: GrindRanges;
};

export type BrewIcon = {
  src: string;
  width: string;
  height: string;
};

export type BrewMethod = {
  type: string;
  path: string;
  icon: BrewIcon;
  recipes: Recipe[];
};

export type BrewMethods = {
  brewMethods: BrewMethod[];
};
