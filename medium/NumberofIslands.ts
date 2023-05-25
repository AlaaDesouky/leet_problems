/**
 * Id: 200
 * Name: Number of Islands
 * Link: https://leetcode.com/problems/number-of-islands/
 */

function numIslands(grid: string[][]): number {
  let islandsCount: number = 0;

  const bfs = (grid: string[][], i: number, j: number) => {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] === "0"
    )
      return;

    grid[i][j] = "0";
    bfs(grid, i + 1, j);
    bfs(grid, i - 1, j);
    bfs(grid, i, j + 1);
    bfs(grid, i, j - 1);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        islandsCount += 1;
        bfs(grid, i, j);
      }
    }
  }

  return islandsCount;
}
