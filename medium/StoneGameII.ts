/**
 * Id: 1140
 * Name: Stone Game II
 * Link: https://leetcode.com/problems/stone-game-ii/
 */

function stoneGameII(piles: number[]): number {
  if (!piles.length) return 0;

  const dp: number[][] = new Array(piles.length)
    .fill([])
    .map(() => new Array(piles.length).fill(0));
  const suffixSum: number[] = new Array(piles.length).fill(0);

  const helper = (i: number, M: number): number => {
    if (i === piles.length) return 0;
    if (i + 2 * M >= piles.length) return suffixSum[i];
    if (dp[i][M] !== 0) return dp[i][M];

    let result: number = 0;
    for (let x = 1; x <= 2 * M; x++) {
      result = Math.max(result, suffixSum[i] - helper(i + x, Math.max(M, x)));
    }

    dp[i][M] = result;
    return result;
  };

  suffixSum[suffixSum.length - 1] = piles[piles.length - 1];
  for (let i = piles.length - 2; i >= 0; i--) {
    suffixSum[i] = piles[i] + suffixSum[i + 1];
  }

  return helper(0, 1);
}
