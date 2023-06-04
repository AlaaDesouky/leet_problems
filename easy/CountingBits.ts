/**
 * Id: 338
 * Name: Counting Bits
 * Link: https://leetcode.com/problems/counting-bits/
 */

function countBits(n: number): number[] {
  let dp: number[] = new Array(n + 1).fill(0);
  let offset: number = 1;

  for (let i = 1; i < n + 1; i++) {
    if (offset * 2 === i) offset = i;
    dp[i] = 1 + dp[i - offset];
  }

  return dp;
}
