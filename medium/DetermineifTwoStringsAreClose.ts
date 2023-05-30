/**
 * Id: 1657
 * Name: Determine if Two Strings Are Close
 * Link: https://leetcode.com/problems/determine-if-two-strings-are-close
 */

function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;

  let w1Freq: number[] = new Array(26).fill(0);
  let w1Set: Set<string> = new Set<string>(word1.split(""));
  let w2Freq: number[] = new Array(26).fill(0);
  let w2Set: Set<string> = new Set<string>(word2.split(""));

  const _getCharCode = (c: string): number => {
    return c.charCodeAt(0) - 97;
  };

  for (let i = 0; i < word1.length; i++) {
    w1Freq[_getCharCode(word1[i])] += 1;
    w2Freq[_getCharCode(word2[i])] += 1;
  }

  w1Freq.sort((a, b) => a - b);
  w2Freq.sort((a, b) => a - b);

  return (
    JSON.stringify(w1Freq) === JSON.stringify(w2Freq) &&
    w1Set.size === w2Set.size &&
    [...w1Set].every((c) => w2Set.has(c))
  );
}
