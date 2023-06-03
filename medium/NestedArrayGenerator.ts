/**
 * Id: 2649
 * Name: Nested Array Generator
 * Link: https://leetcode.com/problems/nested-array-generator
 */
type MultidimensionalArray = (MultidimensionalArray | number)[];

function* inorderTraversal(
  arr: MultidimensionalArray
): Generator<number, void, unknown> {
  for (const n of arr) Array.isArray(n) ? yield* inorderTraversal(n) : yield n;
}
