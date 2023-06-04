/**
 * Id: 1318
 * Name: Minimum Flips to Make a OR b Equal to c
 * Link: https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/
 */
function minFlips(a: number, b: number, c: number): number {
  let res: number = 0;
  while (a || b || c) {
    if (c & 1) {
      if (!(a & 1) && !(b & 1)) res++;
    } else {
      if (a & 1 && b & 1) res += 2;
      else if (a & 1 || b & 1) res += 1;
    }
    a >>= 1;
    b >>= 1;
    c >>= 1;
  }
  return res;
}
