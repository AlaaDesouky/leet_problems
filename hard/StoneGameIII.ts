/**
 * Id: 1406
 * Name: Stone Game III
 * Link: https://leetcode.com/problems/stone-game-iii/
 */
function stoneGameIII(stoneValue: number[]): string {
  let n: number = stoneValue.length;
  let dp: number[] = new Array(3).fill(0);
  let takeOne: number = -Infinity;
  let takeTwo: number = -Infinity;
  let takeThree: number = -Infinity;

  for (let i = n - 1; i >= 0; i--) {
    takeOne = stoneValue[i] - dp[(i + 1) % 3];
    if (i + 1 < n) {
      takeTwo = stoneValue[i] + stoneValue[i + 1] - dp[(i + 2) % 3];
    }
    if (i + 2 < n) {
      takeThree =
        stoneValue[i] + stoneValue[i + 1] + stoneValue[i + 2] - dp[(i + 3) % 3];
    }
    dp[i % 3] = Math.max(takeOne, takeTwo, takeThree);
  }

  return dp[0] > 0 ? "Alice" : dp[0] < 0 ? "Bob" : "Tie";
}
