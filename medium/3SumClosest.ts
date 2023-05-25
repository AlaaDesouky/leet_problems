/**
 * Id: 16
 * Name: 3Sum Closest
 * Link: https://leetcode.com/problems/3sum-closest
 */

function threeSumClosest(nums: number[], target: number): number {
  let diff: number = Infinity,
    res: number = 0,
    end: number = nums.length - 1,
    first: number,
    start: number;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    first = nums[i];
    start = i + 1;
    end = nums.length - 1;

    while (start < end) {
      if (first + nums[start] + nums[end] === target) return target;
      else if (Math.abs(first + nums[start] + nums[end] - target) < diff) {
        diff = Math.abs(first + nums[start] + nums[end] - target);
        res = first + nums[start] + nums[end];
      }

      if (first + nums[start] + nums[end] > target) end -= 1;
      else start += 1;
    }
  }

  return res;
}
