/**
 * Id: 226
 * Name: Invert Binary Tree
 * Link: https://leetcode.com/problems/invert-binary-tree
 */

import { TreeNode } from "../_common";

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}
