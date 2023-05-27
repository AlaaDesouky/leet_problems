/**
 * Id: 1679
 * Name: Max Number of K-Sum Pairs
 * Link: https://leetcode.com/problems/max-number-of-k-sum-pairs
 */

function maxOperations(nums: number[], k: number): number {
  let counter: Map<number, number> = new Map<number, number>();
  let seen: Set<number> = new Set<number>();
  let res: number = 0;

  for (let n of nums) counter.set(n, (counter.get(n) ?? 0) + 1);

  for (let x of counter.keys()) {
    if (!seen.has(x) && counter.has(k - x)) {
      if (x === k - x) {
        res += Math.floor(counter.get(x)! / 2);
      } else {
        res += Math.min(counter.get(x)!, counter.get(k - x)!);
      }
    }
    seen.add(x);
    seen.add(k - x);
  }
  return res;
}
