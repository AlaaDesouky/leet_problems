/**
 * Id: 1493
 * Name: Longest Subarray of 1's After Deleting One Element
 * Link: https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element
 */

function longestSubarray(nums: number[]): number {
  let l: number = 0;
  let r: number = 0;
  let k: number = 1;
  let res: number = 0;

  while (r < nums.length) {
    if (nums[r] === 0) k -= 1;
    if (k < 0) {
      if (nums[l] === 0) k += 1;
      l += 1;
    }
    res = Math.max(res, r - l);
    r += 1;
  }

  return res;
}
