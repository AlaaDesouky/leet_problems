/**
 * Id: 2352
 * Name: Equal Row and Column Pairs
 * Link: https://leetcode.com/problems/equal-row-and-column-pairs
 */

function equalPairs(grid: number[][]): number {
  let rowCount: Map<string, number> = new Map<string, number>();
  let res: number = 0;

  const _getString = (row: number[]): string => {
    return row.join(",");
  };

  for (let row of grid) {
    let str: string = _getString(row);
    rowCount.set(str, (rowCount.get(str) ?? 0) + 1);
  }

  for (let i = 0; i < grid.length; i++) {
    let col: number[] = [];
    for (let j = 0; j < grid[i].length; j++) {
      col.push(grid[j][i]);
    }
    res += rowCount.get(_getString(col)) ?? 0;
  }

  return res;
}
