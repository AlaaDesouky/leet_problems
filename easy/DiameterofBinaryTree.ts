/**
 * Id: 543
 * Name: Diameter of Binary Tree
 * Link: https://leetcode.com/problems/diameter-of-binary-tree
 */

import { TreeNode } from "../_common";

function diameterOfBinaryTree(root: TreeNode | null): number {
  let res: number[] = [0];

  const dfs = (root: TreeNode | null): number => {
    if (!root) return -1;

    let left: number = dfs(root.left);
    let right: number = dfs(root.right);
    res[0] = Math.max(res[0], 2 + left + right);

    return 1 + Math.max(left, right);
  };

  dfs(root);
  return res[0];
}
