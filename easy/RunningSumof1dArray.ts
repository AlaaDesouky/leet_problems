/**
 * Id: 1480
 * Name: Running Sum of 1d Array
 * Link: https://leetcode.com/problems/running-sum-of-1d-array/
 */

function runningSum(nums: number[]): number[] {
  let temp: number = 0;
  return nums.map((num) => (temp += num));
}
