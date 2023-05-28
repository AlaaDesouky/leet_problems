/**
 * Id: 643
 * Name: Maximum Average Subarray I
 * Link: https://leetcode.com/problems/maximum-average-subarray-i
 */

function findMaxAverage(nums: number[], k: number): number {
  let maxAvg: number = Number.MIN_SAFE_INTEGER;
  let sum: number = 0;
  let l: number = 0;
  let r: number = 0;
  let avg: number = 0;

  while (r < nums.length) {
    sum += nums[r];
    avg = sum / k;
    if (r >= k - 1) {
      maxAvg = avg > maxAvg ? avg : maxAvg;
      sum -= nums[l];
      l += 1;
    }
    r += 1;
  }
  return maxAvg;
}
