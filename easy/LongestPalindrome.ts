/**
 * Id: 409
 * Name: Longest Palindrome
 * Link: https://leetcode.com/problems/longest-palindrome/
 */

function longestPalindrome(s: string): number {
  let char_count: number[] = new Array(60).fill(0);
  let result: number = 0;
  for (let i = 0; i < s.length; i++) {
    char_count[s.charCodeAt(i) - 65]
      ? (char_count[s.charCodeAt(i) - 65] += 1)
      : (char_count[s.charCodeAt(i) - 65] = 1);
  }

  for (let count of char_count) {
    result += Math.floor(count / 2) * 2;
    if (result % 2 === 0 && count % 2 === 1) result += 1;
  }

  return result;
}
