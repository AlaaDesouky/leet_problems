/**
 * Id: 100
 * Name: Same Tree
 * Link: https://leetcode.com/problems/same-tree
 */

import { TreeNode } from "../_common";

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
