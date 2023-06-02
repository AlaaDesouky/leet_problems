/**
 * Id: 790
 * Name: Domino and Tromino Tiling
 * Link: https://leetcode.com/problems/domino-and-tromino-tiling
 */
function numTilings(n: number): number {
  let dp: number[] = [1, 1, 2];
  if (n < 3) return dp[n];

  let mod: number = Math.pow(10, 9) + 7;
  let temp: number;
  for (let i = 3; i <= n; i++) {
    temp = dp[0];
    dp[0] = dp[1];
    dp[1] = dp[2];
    dp[2] = (((2 * dp[1]) % mod) + (temp % mod)) % mod;
  }
  return dp[2];
}
