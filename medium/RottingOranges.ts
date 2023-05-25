/**
 * Id: 994
 * Name: Rotting Oranges
 * Link: https://leetcode.com/problems/rotting-oranges
 */

function orangesRotting(grid: number[][]): number {
  let A = grid;
  let queue: number[][] = [];
  let fresh = 0;
  let maxTime = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      if (A[i][j] === 2) {
        queue.push([i, j, 0]);
      } else if (A[i][j] == 1) {
        fresh++;
      }
    }
  }
  if (fresh == 0) return 0;

  while (queue.length) {
    let front: any[] | [] | undefined = queue.shift();
    if (front) {
      let i: number = front[0];
      let j: number = front[1];
      let t: number = front[2];

      if (j - 1 >= 0 && A[i][j - 1] == 1) {
        A[i][j - 1] = 2;
        queue.push([i, j - 1, t + 1]);
        fresh--;
      }
      if (j + 1 < A[0].length && A[i][j + 1] == 1) {
        A[i][j + 1] = 2;
        queue.push([i, j + 1, t + 1]);
        fresh--;
      }
      if (i - 1 >= 0 && A[i - 1][j] == 1) {
        A[i - 1][j] = 2;
        queue.push([i - 1, j, t + 1]);
        fresh--;
      }
      if (i + 1 < A.length && A[i + 1][j] == 1) {
        A[i + 1][j] = 2;
        queue.push([i + 1, j, t + 1]);
        fresh--;
      }
      maxTime = Math.max(maxTime, t + 1);
    }
  }

  return fresh > 0 ? -1 : maxTime - 1;
}
