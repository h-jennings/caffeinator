import { Decimal } from 'decimal.js';

export default function roundToNearestFifth(number) {
  const num = number;
  const roundedNum = new Decimal(num).toNearest(0.05, Decimal.ROUND_UP).toNumber();
  return roundedNum;
}
