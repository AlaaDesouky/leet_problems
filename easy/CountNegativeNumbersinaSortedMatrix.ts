/**
 * Id: 1351
 * Name: Count Negative Numbers in a Sorted Matrix
 * Link: https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
 */
function countNegatives(grid: number[][]): number {
  let n: number = grid.length,
    m: number = grid[0].length,
    r: number = n - 1,
    c: number = 0,
    count: number = 0;

  while (r >= 0 && c < m) {
    if (grid[r][c] < 0) {
      r -= 1;
      count += m - c;
    } else {
      c += 1;
    }
  }
  return count;
}
