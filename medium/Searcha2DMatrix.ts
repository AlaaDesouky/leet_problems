/**
 * Id: 74
 * Name: Search a 2D Matrix
 * Link: https://leetcode.com/problems/search-a-2d-matrix
 */

function searchMatrix(matrix: number[][], target: number): boolean {
  let rows: number = matrix.length,
    cols: number = matrix[0].length,
    l: number = 0,
    r: number = rows * cols - 1,
    m: number,
    m_el: number;

  while (l <= r) {
    m = Math.floor(l + (r - l) / 2);
    m_el = matrix[Math.floor(m / cols)][Math.floor(m % cols)];

    if (m_el === target) return true;
    else if (target < m_el) r = m - 1;
    else if (target > m_el) l = m + 1;
  }

  return false;
}
