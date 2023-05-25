/**
 * Id: 1706
 * Name: Where Will the Ball Fall
 * Link: https://leetcode.com/problems/where-will-the-ball-fall/
 */

function findBall(grid: number[][]): number[] {
  return grid.reduce(
    (a, r) => a.map((v) => (r[v] * r[v + r[v]] === 1 ? v + r[v] : -1)),
    grid[0].map((_, i) => i)
  );
}
