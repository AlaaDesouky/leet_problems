/**
 * Id: 1035
 * Name: Uncrossed Lines
 * Link: https://leetcode.com/problems/uncrossed-lines/
 */

function maxUncrossedLines(nums1: number[], nums2: number[]): number {
  let n: number = nums1.length;
  let m: number = nums2.length;
  let prev: number = 0;
  let curr: number = 0;

  if (n < m) return maxUncrossedLines(nums2, nums1);

  let dp: number[] = new Array(m + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    prev = 0;
    for (let j = 1; j <= m; j++) {
      curr = dp[j];
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[j] = prev + 1;
      } else {
        dp[j] = Math.max(dp[j - 1], curr);
      }
      prev = curr;
    }
  }
  return dp[m];
}
