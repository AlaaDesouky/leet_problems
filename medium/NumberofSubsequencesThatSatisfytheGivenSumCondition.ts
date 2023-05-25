/**
 * Id: 1498
 * Name: Number of Subsequences That Satisfy the Given Sum Condition
 * Link: https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/
 */

function numSubseq(nums: number[], target: number): number {
  let mod: number = 1000000007,
    res: number = 0,
    l_ptr: number = 0,
    r_ptr: number = nums.length - 1;

  let pre: number[] = [1];

  for (let i = 0; i <= nums.length; i++) {
    pre.push(((pre[pre.length - 1] || 0) << 1) % mod);
  }

  nums.sort((a, b) => a - b);

  while (l_ptr <= r_ptr) {
    if (nums[l_ptr] + nums[r_ptr] > target) {
      r_ptr -= 1;
    } else {
      res = res + pre[r_ptr - l_ptr];
      l_ptr += 1;
    }
  }

  return res % mod;
}
