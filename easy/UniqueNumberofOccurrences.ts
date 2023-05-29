/**
 * Id: 1207
 * Name: Unique Number of Occurrences
 * Link: https://leetcode.com/problems/unique-number-of-occurrences
 */

function uniqueOccurrences(arr: number[]): boolean {
  let map: Map<number, number> = new Map<number, number>();
  for (let n of arr) map.set(n, (map.get(n)! ?? 0) + 1);

  let set: Set<number> = new Set<number>(map.values());
  return set.size === map.size;
}
