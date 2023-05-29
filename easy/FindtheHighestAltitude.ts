/**
 * Id: 1732
 * Name: Find the Highest Altitude
 * Link: https://leetcode.com/problems/find-the-highest-altitude
 */

function largestAltitude(gain: number[]): number {
  let res: number = 0;
  let cur: number = 0;

  for (let g of gain) {
    cur += g;
    res = Math.max(res, cur);
  }

  return res;
}
