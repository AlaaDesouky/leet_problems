/**
 * Id: 162
 * Name: Find Peak Element
 * Link: https://leetcode.com/problems/find-peak-element
 */
function findPeakElement(nums: number[]): number {
  let l: number = 0,
    r: number = nums.length - 1,
    m: number;

  while (l <= r) {
    m = Math.floor(l + (r - l) / 2);
    if (m > 0 && nums[m] < nums[m - 1]) r = m - 1;
    else if (m < nums.length - 1 && nums[m] < nums[m + 1]) l = m + 1;
    else return m;
  }
}
