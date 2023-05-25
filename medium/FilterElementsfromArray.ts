/**
 * Id: 2634
 * Name: Filter Elements from Array
 * Link: https://leetcode.com/problems/filter-elements-from-array
 */
function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
  let result: number[] = [];
  for (let idx = 0; idx < arr.length; idx++)
    fn(arr[idx], idx) && result.push(arr[idx]);
  return result;
}
