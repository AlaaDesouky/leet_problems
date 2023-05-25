/**
 * Id: 392
 * Name: Is Subsequence
 * Link: https://leetcode.com/problems/is-subsequence/
 */

function isSubsequence(s: string, t: string): boolean {
  let count: number = 0;

  for (let char of t) {
    if (char === s[count]) count += 1;
  }

  return count === s.length;
}
