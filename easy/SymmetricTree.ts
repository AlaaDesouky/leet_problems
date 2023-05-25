/**
 * Id: 101
 * Name: Symmetric Tree
 * Link: https://leetcode.com/problems/symmetric-tree
 */

import { TreeNode } from "../_common";

function isSymmetric(root: TreeNode | null): boolean {
  const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    return isSameTree(p.left, q.right) && isSameTree(p.right, q.left);
  };

  return isSameTree(root, root);
}
