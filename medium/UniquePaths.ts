/**
 * Id: 62
 * Name: Unique Paths
 * Link: https://leetcode.com/problems/unique-paths/
 */

function uniquePaths(m: number, n: number): number {
  let row = new Array(n).fill(1),
    newRow = new Array(n).fill(1);

  for (let i = 0; i < m - 1; i++) {
    for (let j = n - 2; j >= 0; j--) {
      newRow[j] = newRow[j + 1] + row[j];
    }
    row = newRow;
  }

  return row[0];
}
