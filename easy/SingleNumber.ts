/**
 * Id: 136
 * Name: Single Number
 * Link: https://leetcode.com/problems/single-number/
 */
function singleNumber(nums: number[]): number {
  let res: number = 0;
  for (let n of nums) res = n ^ res;
  return res;
}
