/**
 * Id: 2677
 * Name: Chunk Array
 * Link: https://leetcode.com/problems/chunk-array
 */

function chunk(arr: any[], size: number): any[][] {
  return new Array(Math.ceil(arr.length / size))
    .fill([])
    .map((_, idx) => arr.slice(idx * size, (idx + 1) * size));
}
