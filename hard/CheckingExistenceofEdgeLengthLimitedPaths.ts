/**
 * Id: 1697
 * Name: Checking Existence of Edge Length Limited Paths
 * Link: https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/
 */

import { DSU } from "../_common";

function distanceLimitedPathsExist(
  n: number,
  edgeList: number[][],
  queries: number[][]
): boolean[] {
  const dsu = new DSU(n);
  let result = new Array(queries.length).fill(false);

  queries.forEach((_, idx) => {
    queries[idx] = [queries[idx][0], queries[idx][1], queries[idx][2], idx];
  });

  queries.sort((a, b) => a[2] - b[2]);
  edgeList.sort((a, b) => a[2] - b[2]);

  let i = 0;
  for (let query of queries) {
    while (i < edgeList.length && edgeList[i][2] < query[2]) {
      dsu.union(edgeList[i][0], edgeList[i][1]);
      i += 1;
    }

    if (dsu.find(query[0]) === dsu.find(query[1])) result[query[3]] = true;
  }

  return result;
}
