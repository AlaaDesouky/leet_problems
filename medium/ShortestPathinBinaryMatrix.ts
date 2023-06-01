/**
 * Id: 1091
 * Name: Shortest Path in Binary Matrix
 * Link: https://leetcode.com/problems/shortest-path-in-binary-matrix/
 */
function shortestPathBinaryMatrix(grid: number[][]): number {
  let n: number = grid.length - 1;
  if (grid[n][n] === 1 || grid[0][0] === 1) return -1;
  let q: number[][] = [];
  let dir: number[][] = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];
  q.push([0, 0, 1]);
  grid[0][0] = 1;

  while (q.length > 0) {
    let [x, y, count]: number[] = q.shift()!;
    if (x === n && y === n) return count;
    else {
      for (let d of dir) {
        let r: number = x + d[0];
        let c: number = y + d[1];
        if (
          r >= 0 &&
          c >= 0 &&
          r < grid.length &&
          c < grid.length &&
          grid[c][r] === 0
        ) {
          q.push([r, c, count + 1]);
          grid[c][r] = 1;
        }
      }
    }
  }
  return -1;
}
