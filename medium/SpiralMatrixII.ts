/**
 * Id: 59
 * Name: Spiral Matrix II
 * Link: https://leetcode.com/problems/spiral-matrix-ii
 */

function generateMatrix(n: number): number[][] {
  let matrix: number[][] = new Array(n)
    .fill([])
    .map(() => new Array(n).fill(0));
  let left: number = 0;
  let right: number = n - 1;
  let up: number = 0;
  let down: number = n - 1;
  let ct: number = 1;

  while (ct <= n * n) {
    for (let i = left; i <= right && ct <= n * n; i++) matrix[up][i] = ct++;
    for (let i = up + 1; i <= down && ct <= n * n; i++) matrix[i][right] = ct++;
    for (let i = right - 1; i >= left && ct <= n * n; i--)
      matrix[down][i] = ct++;
    for (let i = down - 1; i >= up + 1 && ct <= n * n; i--)
      matrix[i][left] = ct++;

    left += 1;
    right -= 1;
    up += 1;
    down -= 1;
  }

  return matrix;
}
