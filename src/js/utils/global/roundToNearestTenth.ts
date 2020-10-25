import { Decimal } from 'decimal.js';

export function roundToNearestTenth(number: number) {
  const num = number;
  const roundedNum = new Decimal(num)
    .toNearest(0.1, Decimal.ROUND_UP)
    .toNumber();
  return roundedNum;
}
