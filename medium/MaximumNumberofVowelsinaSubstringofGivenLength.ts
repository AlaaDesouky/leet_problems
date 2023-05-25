/**
 * Id: 1456
 * Name: Maximum Number of Vowels in a Substring of Given Length
 * Link: https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length
 */

function maxVowels(s: string, k: number): number {
  const vowels: Set<string> = new Set(["a", "e", "i", "o", "u"]);
  let maxVowels: number = 0,
    currVowel: number = 0,
    idx: number = 0;

  for (let ch of s) {
    if (vowels.has(ch)) currVowel += 1;
    if (idx >= k && vowels.has(s[idx - k])) currVowel -= 1;

    maxVowels = Math.max(maxVowels, currVowel);
    idx += 1;
  }

  return maxVowels;
}
