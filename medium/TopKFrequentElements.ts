/**
 * Id: 347
 * Name: Top K Frequent Elements
 * Link: https://leetcode.com/problems/top-k-frequent-elements
 */

function topKFrequent(nums: number[], k: number): number[] {
  let count: Map<number, number> = new Map<number, number>();
  let freq: number[][] = new Array(nums.length + 1)
    .fill([])
    .map(() => new Array());
  let res: number[] = [];

  for (let n of nums) count.set(n, (count.get(n) ?? 0) + 1);
  for (let [n, c] of count) freq[c].push(n);

  for (let i = freq.length; i >= 0; i--) {
    if (!freq[i]?.length) continue;
    for (let n of freq[i]) {
      res.push(n);
      if (res.length === k) return res;
    }
  }
}
