/**
 * Id: 102
 * Name: Binary Tree Level Order Traversal
 * Link: https://leetcode.com/problems/binary-tree-level-order-traversal/
 */

import { TreeNode } from "../_common/TreeNode";

function levelOrder(root: TreeNode | null): number[][] {
  const levels = {};

  const bfs = (root: TreeNode | null, level: number = 0) => {
    if (!root) return;

    levels[level] ? levels[level].push(root.val) : (levels[level] = [root.val]);

    bfs(root.left, level + 1);
    bfs(root.right, level + 1);
  };

  bfs(root);
  return Object.values(levels);
}
