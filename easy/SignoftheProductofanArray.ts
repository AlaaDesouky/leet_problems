/**
 * Id: 1822
 * Name: Sign of the Product of an Array
 * Link: https://leetcode.com/problems/sign-of-the-product-of-an-array/
 */

function arraySign(nums: number[]): number {
  let negativesCount: number = 0;

  for (let num of nums) {
    if (num === 0) return 0;
    if (num < 0) negativesCount += 1;
  }

  return negativesCount % 2 === 0 ? 1 : -1;
}
