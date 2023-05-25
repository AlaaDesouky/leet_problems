/**
 * Id: 1799
 * Name: Maximize Score After N Operations
 * Link: https://leetcode.com/problems/maximize-score-after-n-operations
 */

function maxScore(nums: number[]): number {
  const casesCount = 1 << nums.length;
  const lastMask = casesCount - 1;
  const dp: number[] = new Array(casesCount).fill(0);
  const gcds: number[][] = new Array(nums.length).fill([]).map(() => []);

  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      gcds[i][j] = gcd(nums[i], nums[j]);
    }
  }

  dp[lastMask] = 0;
  for (let mask = lastMask - 1; mask >= 0; mask--) {
    const numbersUsed = mask.toString(2).split("1").length - 1;
    const step = (numbersUsed >> 1) + 1;
    if (numbersUsed & 1) {
      continue;
    }
    for (let i = 0; i < nums.length; i++) {
      if ((mask >> i) & 1) {
        continue;
      }
      for (let j = i + 1; j < nums.length; j++) {
        if ((mask >> j) & 1) {
          continue;
        }
        const score = step * gcds[i][j];
        const newMask = mask | (1 << i) | (1 << j);
        const nextScore = dp[newMask];
        dp[mask] = Math.max(dp[mask], score + nextScore);
      }
    }
  }
  return dp[0];
}
