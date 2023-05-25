/**
 * Id: 3
 * Name: Longest Substring Without Repeating Characters
 * Link: https://leetcode.com/problems/longest-substring-without-repeating-characters
 */

function lengthOfLongestSubstring(s: string): number {
  let charMap: Map<string, number> = new Map<string, number>();
  let l: number = 0;
  let res: number = 0;

  for (let i = 0; i < s.length; i++) {
    if (charMap.has(s[i]) && charMap.get(s[i])! >= l) {
      l = charMap.get(s[i])! + 1;
    }

    res = Math.max(res, i - l + 1);
    charMap.set(s[i], i);
  }

  return res;
}
