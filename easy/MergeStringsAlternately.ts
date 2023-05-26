/**
 * Id: 1768
 * Name: Merge Strings Alternately
 * Link: https://leetcode.com/problems/merge-strings-alternately
 */

function mergeAlternately(word1: string, word2: string): string {
  if (!word1.length && !word2.length) return "";
  if (!word1.length) return word2;
  if (!word2.length) return word1;

  let res: string = "";
  for (let i = 0; i < Math.max(word1.length, word2.length); i++)
    res += (word1[i] ?? "") + (word2[i] ?? "");

  return res;
}
