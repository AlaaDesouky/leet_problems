/**
 * Id: 1143
 * Name: Longest Common Subsequence
 * Link: https://leetcode.com/problems/longest-common-subsequence/
 */
function longestCommonSubsequence(text1: string, text2: string): number {
  let dp: number[][] = new Array(text1.length + 1)
    .fill([])
    .map((_) => new Array(text2.length + 1).fill(0));

  for (let i = text1.length - 1; i >= 0; i--) {
    for (let j = text2.length - 1; j >= 0; j--) {
      dp[i][j] =
        text1[i] === text2[j]
          ? 1 + dp[i + 1][j + 1]
          : Math.max(dp[i][j + 1], dp[i + 1][j]);
    }
  }

  return dp[0][0];
}
