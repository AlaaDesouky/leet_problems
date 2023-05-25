/**
 * Id: 1579
 * Name: Remove Max Number of Edges to Keep Graph Fully Traversable
 * Link: https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/
 */

import { DSU } from "../_common";

function maxNumEdgesToRemove(n: number, edges: number[][]): number {
  edges.sort((a, b) => b[0] - a[0]);

  const alice_dsu: DSU = new DSU(n + 1);
  const bob_dsu: DSU = new DSU(n + 1);

  let removed_edges: number = 0,
    alice_edges: number = 0,
    bob_edges: number = 0;

  for (let edge of edges) {
    switch (edge[0]) {
      case 3:
        if (alice_dsu.union(edge[1], edge[2])) {
          bob_dsu.union(edge[1], edge[2]);
          alice_edges += 1;
          bob_edges += 1;
        } else {
          removed_edges += 1;
        }
        break;

      case 2:
        if (bob_dsu.union(edge[1], edge[2])) {
          bob_edges += 1;
        } else {
          removed_edges += 1;
        }
        break;

      case 1:
        if (alice_dsu.union(edge[1], edge[2])) {
          alice_edges += 1;
        } else {
          removed_edges += 1;
        }
        break;
    }
  }

  return bob_edges === n - 1 && alice_edges === n - 1 ? removed_edges : -1;
}
