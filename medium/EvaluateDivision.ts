/**
 * Id: 399
 * Name: Evaluate Division
 * Link: https://leetcode.com/problems/evaluate-division
 */

function calcEquation(
  equations: string[][],
  values: number[],
  queries: string[][]
): number[] {
  let adj = {};
  for (let [i, eq] of equations.entries()) {
    let [a, b] = eq;

    if (!adj[a]) adj[a] = {};
    if (!adj[b]) adj[b] = {};

    adj[b][a] = values[i];
    adj[a][b] = 1 / values[i];
  }

  const dfs = (src: string, target: string, seen: Set<string>): number => {
    if (!adj[src] || !adj[target]) return -1;
    if (src === target) return 1;

    for (const neighbor in adj[src]) {
      if (seen.has(neighbor)) {
        continue;
      }
      const result =
        dfs(neighbor, target, seen.add(neighbor)) * adj[neighbor][src];
      if (result > 0) {
        return result;
      }
    }
    return -1;
  };

  return queries.map((q) => dfs(q[0], q[1], new Set<string>()));
}
