/**
 * Id: 837
 * Name: New 21 Game
 * Link: https://leetcode.com/problems/new-21-game
 */
function new21Game(n: number, k: number, maxPts: number): number {
  if (k === 0) return 1.0;
  let windowSum: number = 0;

  for (let i = k; i < k + maxPts; i++) windowSum += i <= n ? 1 : 0;

  let dp = {};
  for (let i = k - 1; i >= 0; i--) {
    dp[i] = windowSum / maxPts;
    let remove: number = 0;

    if (i + maxPts <= n) remove = dp[i + maxPts] ?? 1;

    windowSum += dp[i] - remove;
  }

  return dp[0];
}
