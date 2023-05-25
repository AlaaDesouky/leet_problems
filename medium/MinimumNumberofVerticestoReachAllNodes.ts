/**
 * Id: 1557
 * Name: Minimum Number of Vertices to Reach All Nodes
 * Link: https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/
 */

function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
  let incoming: Map<number, number[]> = new Map<number, number[]>();
  let res: number[] = [];

  for (let [src, dst] of edges)
    incoming.has(dst)
      ? incoming.set(dst, [...incoming.get(dst)!, src])
      : incoming.set(dst, [src]);

  for (let i = 0; i < n; i++) {
    if (!incoming.has(i)) res.push(i);
  }

  return res;
}
