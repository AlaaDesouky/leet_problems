/**
 * Id: 374
 * Name: Guess Number Higher or Lower
 * Link: https://leetcode.com/problems/guess-number-higher-or-lower/
 */
function guess(n: number): number {
  // API CALL
  return n;
}
function guessNumber(n: number): number {
  let l: number = 1,
    r: number = n,
    m: number,
    res: number;

  while (l <= r) {
    m = Math.floor(l + (r - l) / 2);
    res = guess(m);
    if (res === 0) return m;
    else if (res < 0) r = m - 1;
    else l = m + 1;
  }

  return -1;
}
