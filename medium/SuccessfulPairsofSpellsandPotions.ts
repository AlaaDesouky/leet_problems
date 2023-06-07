/**
 * Id: 2300
 * Name: Successful Pairs of Spells and Potions
 * Link: https://leetcode.com/problems/successful-pairs-of-spells-and-potions
 */
function successfulPairs(
  spells: number[],
  potions: number[],
  success: number
): number[] {
  let n: number = potions.length,
    idx: number,
    l: number,
    r: number,
    m: number,
    res: number[] = [];

  potions.sort((a, b) => a - b);

  for (let s of spells) {
    l = 0;
    r = n - 1;
    idx = n;
    while (l <= r) {
      m = Math.floor(l + (r - l) / 2);
      if (s * potions[m] >= success) {
        r = m - 1;
        idx = m;
      } else {
        l = m + 1;
      }
    }
    res.push(n - idx);
  }
  return res;
}
