/**
 * Id: 334
 * Name: Increasing Triplet Subsequence
 * Link: https://leetcode.com/problems/increasing-triplet-subsequence
 */

function increasingTriplet(nums: number[]): boolean {
  if (nums.length < 3) return false;

  let l: number = Infinity;
  let m: number = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > m) return true;

    if (nums[i] > l && nums[i] < m) m = nums[i];
    else if (nums[i] < l) l = nums[i];
  }

  return false;
}
