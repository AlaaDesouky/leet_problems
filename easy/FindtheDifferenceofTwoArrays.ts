/**
 * Id: 2215
 * Name: Find the Difference of Two Arrays
 * Link: https://leetcode.com/problems/find-the-difference-of-two-arrays
 */

function findDifference(nums1: number[], nums2: number[]): number[][] {
  let result: number[][] = [];
  let activeSet: Set<number>;
  [nums1, nums2].reduce((prev, curr) => {
    activeSet = new Set(curr);
    for (let n of prev) {
      activeSet.delete(n);
    }
    result.push([...activeSet]);
    return (prev = curr);
  }, nums2);

  return result;
}
