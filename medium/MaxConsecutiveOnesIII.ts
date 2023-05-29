/**
 * Id: 1004
 * Name: Max Consecutive Ones III
 * Link: https://leetcode.com/problems/max-consecutive-ones-iii
 */

function longestOnes(nums: number[], k: number): number {
  let l: number = 0;
  let r: number = 0;

  while (r < nums.length) {
    if (nums[r] === 0) k -= 1;
    if (k < 0) {
      if (nums[l] === 0) k += 1;
      l += 1;
    }
    r += 1;
  }

  return r - l;
}
