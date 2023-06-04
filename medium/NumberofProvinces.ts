/**
 * Id: 547
 * Name: Number of Provinces
 * Link: https://leetcode.com/problems/number-of-provinces/
 */
function findCircleNum(isConnected: number[][]): number {
  let numOfProvinces: number = 0;
  let visited: Set<number> = new Set<number>();

  const dfs = (start: number): void => {
    visited.add(start);
    for (let end = 0; end < isConnected.length; end++) {
      if (isConnected[start][end] && !visited.has(end)) dfs(end);
    }
  };

  for (let start = 0; start < isConnected.length; start++) {
    if (!visited.has(start)) {
      numOfProvinces += 1;
      dfs(start);
    }
  }

  return numOfProvinces;
}
