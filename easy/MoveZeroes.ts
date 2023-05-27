/**
 * Id: 283
 * Name: Move Zeroes
 * Link: https://leetcode.com/problems/move-zeroes
 */

function moveZeroes(nums: number[]): void {
  let len = nums.length;
  while (len > 0) {
    nums[len - 1] === 0 && nums.push(...nums.splice(len - 1, 1));
    len--;
  }
}
