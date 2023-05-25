/**
 * Id: 802
 * Name: Find Eventual Safe States
 * Link: https://leetcode.com/problems/find-eventual-safe-states/description/
 */
function eventualSafeNodes(graph: number[][]): number[] {
  let result: number[] = [];
  let isVisited: boolean[] = new Array(graph.length).fill(false);
  let isSafe: boolean[] = new Array(graph.length).fill(false);

  const dfs = (idx: number): boolean => {
    if (isSafe[idx] || !graph[idx].length) return (isSafe[idx] = true);
    if (isVisited[idx]) return false;
    isVisited[idx] = true;

    let res = true;
    for (let child of graph[idx]) {
      res = res && dfs(child);
    }

    return (isSafe[idx] = res);
  };

  graph.forEach((_, idx) => !isVisited[idx] && dfs(idx));

  isSafe.forEach((node, idx) => node && result.push(idx));

  return result;
}
