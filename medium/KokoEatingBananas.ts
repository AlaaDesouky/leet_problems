/**
 * Id: 875
 * Name: Koko Eating Bananas
 * Link: https://leetcode.com/problems/koko-eating-bananas/
 */
function minEatingSpeed(piles: number[], h: number): number {
  let l: number = 0,
    r: number = Math.max(...piles),
    m: number,
    hours: number,
    res: number = r;

  while (l <= r) {
    m = Math.floor(l + (r - l) / 2);
    hours = 0;

    for (let p of piles) hours += Math.ceil(p / m);

    if (hours <= h) {
      res = Math.min(res, m);
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return res;
}
