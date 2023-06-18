/**
 * Id: 2328
 * Name: Number of Increasing Paths in a Grid
 * Link: https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/
 */
function countPaths(grid: number[][]): number {
  const dp: number[][] = new Array(grid.length)
    .fill([])
    .map((_) => new Array(grid[0].length).fill(-1));
  let count: number = 0;
  let mod: number = 10 ** 9 + 7;
  let dx: number[] = [1, 0, -1, 0];
  let dy: number[] = [0, 1, 0, -1];

  const isValid = (x: number, y: number): boolean => {
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) return false;
    return true;
  };

  const dfs = (x: number, y: number): number => {
    if (dp[x][y] !== -1) return dp[x][y];
    let ans: number = 1;

    for (let i = 0; i < 4; i++) {
      let nx: number = x + dx[i];
      let ny: number = y + dy[i];

      if (isValid(nx, ny) && grid[x][y] < grid[nx][ny]) {
        ans = ((ans % mod) + (dfs(nx, ny) % mod)) % mod;
      }
    }
    dp[x][y] = ans % mod;
    return dp[x][y];
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      count = ((count % mod) + (dfs(i, j) % mod)) % mod;
    }
  }

  return count % mod;
}
