/**
 * Id: 1466
 * Name: Reorder Routes to Make All Paths Lead to the City Zero
 * Link: https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/
 */
function minReorder(n: number, connections: number[][]): number {
  let count: number = 0;
  let adj: number[][][] = new Array(n).fill([]).map((_) => []);

  const dfs = (node: number, parent: number) => {
    for (let [child, sign] of adj[node]) {
      if (child != parent) {
        count += sign;
        dfs(child, node);
      }
    }
  };

  for (let connection of connections) {
    adj[connection[0]].push([connection[1], 1]);
    adj[connection[1]].push([connection[0], 0]);
  }

  dfs(0, -1);

  return count;
}
