/**
 * Id: 947
 * Name: Most Stones Removed with Same Row or Column
 * Link: https://leetcode.com/problems/most-stones-removed-with-same-row-or-column
 */

import { UnionFind } from "../_common";

function removeStones(stones: number[][]): number {
  let uf: UnionFind = new UnionFind(stones);

  for (let stone of stones) {
    let row = -(stone[0] + 1);
    let col = stone[1] + 1;
    uf.union(row, col);
  }

  return stones.length - uf.count;
}
