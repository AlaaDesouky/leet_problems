/**
 * Id: 724
 * Name: Find Pivot Index
 * Link: https://leetcode.com/problems/find-pivot-index/
 */

function pivotIndex(nums: number[]): number {
  let totalSum = nums.reduce((prev, curr) => prev + curr);
  let leftSum = 0;

  for (let [index, num] of nums.entries()) {
    if (totalSum - leftSum - num === leftSum) return index;
    leftSum += num;
  }

  return -1;
}
