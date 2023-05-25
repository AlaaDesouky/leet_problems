/**
 * Id: 152
 * Name: Spiral MatrixMaximum Product Subarray
 * Link: https://leetcode.com/problems/maximum-product-subarray
 */

function maxProduct(nums: number[]): number {
  let res: number = Math.max(...nums),
    curMin: number = 1,
    curMax: number = 1,
    temp: number;

  for (let num of nums) {
    temp = num * curMax;
    curMax = Math.max(num * curMax, num * curMin, num);
    curMin = Math.min(temp, num * curMin, num);
    res = Math.max(res, curMax);
  }

  return res;
}
