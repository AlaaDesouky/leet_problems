/**
 * Id: 11
 * Name: Container With Most Water
 * Link: https://leetcode.com/problems/container-with-most-water/
 */

function maxArea(height: number[]): number {
  let res: number = 0;
  let l: number = 0;
  let r: number = height.length - 1;
  let area: number = 0;

  while (l < r) {
    area = (r - l) * Math.min(height[l], height[r]);
    res = Math.max(res, area);

    if (height[l] < height[r]) l += 1;
    else r -= 1;
  }

  return res;
}
