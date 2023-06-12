/**
 * Id: 1161
 * Name: Maximum Level Sum of a Binary Tree
 * Link: https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/
 */
import { TreeNode } from "../_common";

function maxLevelSum(root: TreeNode | null): number {
  let sum: number = Number.MIN_SAFE_INTEGER,
    level: number = 1,
    res: number = 0;
  let q: (TreeNode | null)[] = [root];

  while (q.length) {
    let val: number = 0;
    let n: number = q.length;

    for (let i: number = 0; i < n; i++) {
      let temp: TreeNode | null = q.shift()!;

      if (temp.left) q.push(temp.left);
      if (temp.right) q.push(temp.right);

      val += temp.val;
    }

    if (sum < val) {
      sum = val;
      res = level;
    }

    level += 1;
  }

  return res;
}
