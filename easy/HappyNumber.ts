/**
 * Id: 202
 * Name: Happy Number
 * Link: https://leetcode.com/problems/happy-number
 */

function isHappy(n: number): boolean {
  const visited: Set<number> = new Set();

  const squarSum = (n: number): number => {
    let sum = 0;
    while (n !== 0) {
      sum += (n % 10) ** 2;
      n = Math.trunc(n / 10);
    }
    return sum;
  };

  while (!visited.has(n)) {
    visited.add(n);
    n = squarSum(n);

    if (n === 1) return true;
  }

  return false;
}
