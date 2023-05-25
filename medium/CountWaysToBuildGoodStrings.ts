/**
 * Id: 2466
 * Name: Count Ways To Build Good Strings
 * Link: https://leetcode.com/problems/count-ways-to-build-good-strings/
 */
function countGoodStrings(
  low: number,
  high: number,
  zero: number,
  one: number
): number {
  let dp: number[] = new Array(high + 1).fill(0),
    mod: number = 1000000007,
    res: number = 0;

  dp[0] = 1;

  for (let i = 1; i < high + 1; i++) {
    if (i >= zero) dp[i] = (dp[i] + dp[i - zero]) % mod;
    if (i >= one) dp[i] = (dp[i] + dp[i - one]) % mod;
    if (i >= low) res = (res + dp[i]) % mod;
  }

  return res;
}
