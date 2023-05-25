/**
 * Id: 54
 * Name: Spiral Matrix
 * Link: https://leetcode.com/problems/spiral-matrix
 */

function spiralOrder(matrix: number[][]): number[] {
  let res: number[] = [];
  let t: number = 0,
    l: number = 0,
    b: number = matrix.length,
    r: number = matrix[0].length;

  while (l < r && t < b) {
    // move right
    for (let i = l; i < r; i++) res.push(matrix[t][i]);
    t += 1;

    // move down
    for (let i = t; i < b; i++) res.push(matrix[i][r - 1]);
    r -= 1;

    if (!(l < r && t < b)) break;

    // move left
    for (let i = r - 1; i > l - 1; i--) res.push(matrix[b - 1][i]);
    b -= 1;

    // move top
    for (let i = b - 1; i > t - 1; i--) res.push(matrix[i][l]);
    l += 1;
  }

  return res;
}
