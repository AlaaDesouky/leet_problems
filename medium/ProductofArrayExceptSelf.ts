/**
 * Id: 238
 * Name: Product of Array Except Self
 * Link: https://leetcode.com/problems/product-of-array-except-self
 */

function productExceptSelf(nums: number[]): number[] {
  let res: number[] = new Array(nums.length).fill(1);
  let product: number = 1;

  for (let i = 0; i < nums.length; i++) {
    res[i] = product;
    product *= nums[i];
  }

  product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= product;
    product *= nums[i];
  }

  return res;
}
