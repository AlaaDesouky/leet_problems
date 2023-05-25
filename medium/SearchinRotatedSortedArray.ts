/**
 * Id: 33
 * Name: Search in Rotated Sorted Array
 * Link: https://leetcode.com/problems/search-in-rotated-sorted-array
 */

function search(nums: number[], target: number): number {
  let l: number = 0,
    r: number = nums.length - 1,
    m: number = 0;

  while (l <= r) {
    m = Math.floor((l + r) / 2);
    if (target === nums[m]) return m;

    if (nums[l] <= nums[m]) {
      if (target > nums[m] || target < nums[l]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    } else {
      if (target < nums[m] || target > nums[r]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
  }

  return -1;
}
