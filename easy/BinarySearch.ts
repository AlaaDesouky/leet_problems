/**
 * Id: 704
 * Name: Binary Search
 * Link: https://leetcode.com/problems/binary-search/
 */

function search(nums: number[], target: number): number {
  let l_ptr: number = 0;
  let r_ptr: number = nums.length - 1;
  let mid: number = 0;

  while (l_ptr <= r_ptr) {
    mid = l_ptr + Math.floor((r_ptr - l_ptr) / 2);
    if (nums[mid] < target) {
      l_ptr = mid + 1;
    } else if (nums[mid] > target) {
      r_ptr = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}
