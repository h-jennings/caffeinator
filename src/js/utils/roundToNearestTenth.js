import { Decimal } from 'decimal.js';

export default function roundToNearestTenth(number) {
  const num = number;
  const roundedNum = new Decimal(num).toNearest(0.10, Decimal.ROUND_UP).toNumber();
  return roundedNum;
}
