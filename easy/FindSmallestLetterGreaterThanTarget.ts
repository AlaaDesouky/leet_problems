/**
 * Id: 744
 * Name: Find Smallest Letter Greater Than Target
 * Link: https://leetcode.com/problems/find-smallest-letter-greater-than-target/
 */
function nextGreatestLetter(letters: string[], target: string): string {
  let l: number = 0,
    r: number = letters.length - 1,
    m: number;

  while (l <= r) {
    m = Math.floor(l + (r - l) / 2);
    if (letters[m].charCodeAt(0) > target.charCodeAt(0)) r = m - 1;
    else l = m + 1;
  }

  return letters[l] || letters[0];
}
