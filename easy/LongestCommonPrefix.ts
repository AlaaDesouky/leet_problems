/**
 * Id: 14
 * Name: Longest Common Prefix
 * Link: https://leetcode.com/problems/longest-common-prefix
 */

function longestCommonPrefix(strs: string[]): string {
  while (!strs.every((str) => str.startsWith(strs[0])))
    strs[0] = strs[0].slice(0, -1);
  return strs[0];
}
