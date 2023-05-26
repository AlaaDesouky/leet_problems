/**
 * Id: 2625
 * Name: Flatten Deeply Nested Array
 * Link: https://leetcode.com/problems/flatten-deeply-nested-array
 */
type MultiDimensionalArray = (number | MultiDimensionalArray)[];

const flat = function (
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  let res: MultiDimensionalArray = [];

  const flatten = (
    arr: MultiDimensionalArray,
    depth: number
  ): MultiDimensionalArray => {
    for (let val of arr) {
      if (Array.isArray(val) && depth < n) flatten(val, depth + 1);
      else res.push(val);
    }
    return res;
  };

  return flatten(arr, 0);
};
