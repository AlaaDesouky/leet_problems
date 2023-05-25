/**
 * Id: 934
 * Name: Shortest Bridge
 * Link: https://leetcode.com/problems/shortest-bridge
 */
function shortestBridge(grid: number[][]): number {
  let N: number = grid.length;
  let directions: number[][] = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let q: [number, number][] = [];

  const isInvalid = (r: number, c: number): boolean =>
    r < 0 || c < 0 || r >= N || c >= N;

  const dfs = (r: number, c: number): void => {
    if (isInvalid(r, c) || grid[r][c] !== 1) return;
    q.push([r, c]);
    grid[r][c] = 2;
    for (let [dr, dc] of directions) dfs(r + dr, c + dc);
  };

  const bfs = (): number => {
    let res: number = 0;
    while (q.length) {
      let len: number = q.length;
      while (len--) {
        let [r, c] = q.shift()!;
        for (let [dr, dc] of directions) {
          let curR: number = r + dr;
          let curC: number = c + dc;

          if (isInvalid(curR, curC)) continue;
          if (grid[curR][curC] === 1) return res;
          else if (grid[curR][curC] === 0) {
            grid[curR][curC] = 2;
            q.push([curR, curC]);
          }
        }
      }
      res++;
    }
    return res;
  };

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (grid[r][c]) {
        dfs(r, c);
        return bfs();
      }
    }
  }

  return -1;
}
