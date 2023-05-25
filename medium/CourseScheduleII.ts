/**
 * Id: 210
 * Name: Course Schedule II
 * Link: https://leetcode.com/problems/course-schedule-ii
 */

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const adjacencyList = new Map<number, number[]>();
  for (let [v, e] of prerequisites)
    adjacencyList.set(e, (adjacencyList.get(e) || []).concat(v));

  const topologicalSortedOrder: number[] = [];
  const nodeStates = new Array(numCourses).fill(-1);

  const dfs = (node: number): boolean => {
    nodeStates[node] = 0;

    for (let edge of adjacencyList.get(node) ?? []) {
      if (nodeStates[edge] == 0) return true;
      else if (nodeStates[edge] == -1 && dfs(edge)) return true;
    }

    nodeStates[node] = 1;
    topologicalSortedOrder.push(node);

    return false;
  };

  for (let i = 0; i < numCourses; i++) {
    if (nodeStates[i] == -1 && dfs(i)) return [];
  }

  return topologicalSortedOrder.reverse();
}
