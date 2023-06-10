/**
 * Id: 700
 * Name: Search in a Binary Search Tree
 * Link: https://leetcode.com/problems/search-in-a-binary-search-tree
 */

import { TreeNode } from "../_common";

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root || root.val === val) return root;
  return root.val < val
    ? searchBST(root.right, val)
    : searchBST(root.left, val);
}
