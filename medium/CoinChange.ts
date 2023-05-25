/**
 * Id: 322
 * Name: Coin Change
 * Link: https://leetcode.com/problems/coin-change
 */

function coinChange(coins: number[], amount: number): number {
  let dp: number[] = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  for (let i = 1; i < amount + 1; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }

  return dp[amount] !== amount + 1 ? dp[amount] : -1;
}
