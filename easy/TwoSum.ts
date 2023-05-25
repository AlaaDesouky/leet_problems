/**
 * Id: 1
 * Name: Two Sum
 * Link: https://leetcode.com/problems/two-sum/
 */

function twoSum(nums: number[], target: number): number[] {
  let map: Map<number, number> = new Map();
  for (let [idx, num] of nums.entries()) {
    if (map.has(target - num)) return [map.get(target - num)!, idx];
    map.set(num, idx);
  }
}
