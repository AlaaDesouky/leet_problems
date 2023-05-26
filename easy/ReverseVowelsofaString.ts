/**
 * Id: 345
 * Name: Reverse Vowels of a String
 * Link: https://leetcode.com/problems/reverse-vowels-of-a-string
 */

function reverseVowels(s: string): string {
  const vowels: Set<string> = new Set([
    "a",
    "e",
    "i",
    "o",
    "u",
    "A",
    "E",
    "I",
    "O",
    "U",
  ]);
  let l: number = 0;
  let r: number = s.length - 1;
  let res: string[] = [...s];

  while (l < r) {
    if (!vowels.has(res[r])) r -= 1;
    if (!vowels.has(res[l])) l += 1;
    if (vowels.has(res[l]) && vowels.has(res[r])) {
      let temp = res[r];
      res[r] = res[l];
      res[l] = temp;
      r -= 1;
      l += 1;
    }
  }

  return res.join("");
}
