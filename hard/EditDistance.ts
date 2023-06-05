/**
 * Id: 72
 * Name: Edit Distance
 * Link: https://leetcode.com/problems/edit-distance/
 */
function minDistance(word1: string, word2: string): number {
  let l1: number = word1.length;
  let l2: number = word2.length;
  let dp: number[][] = new Array(l1 + 1)
    .fill([])
    .map((_) => new Array(l2 + 1).fill(Infinity));

  for (let i = 0; i < l1 + 1; i++) dp[i][l2] = l1 - i;
  for (let j = 0; j < l2 + 1; j++) dp[l1][j] = l2 - j;

  for (let i = l1 - 1; i >= 0; i--) {
    for (let j = l2 - 1; j >= 0; j--) {
      dp[i][j] =
        word1[i] === word2[j]
          ? dp[i + 1][j + 1]
          : 1 + Math.min(dp[i + 1][j], dp[i][j + 1], dp[i + 1][j + 1]);
    }
  }

  return dp[0][0];
}
