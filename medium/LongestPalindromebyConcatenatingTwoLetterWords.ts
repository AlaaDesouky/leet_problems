/**
 * Id: 2131
 * Name: Longest Palindrome by Concatenating Two Letter Words
 * Link: https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words
 */
function longestPalindrome(words: string[]): number {
  let length = 0;
  const map: Map<string, number> = new Map();

  for (let word of words) {
    const backward = word[1] + word[0];
    const count = map.get(backward);

    if (count) {
      map.set(backward, count - 1);
      length += 4;
    } else {
      map.set(word, (map.get(word) || 0) + 1);
    }
  }

  if (
    Array.from(map).some(([word, count]) => count === 1 && word[0] === word[1])
  ) {
    length += 2;
  }

  return length;
}
