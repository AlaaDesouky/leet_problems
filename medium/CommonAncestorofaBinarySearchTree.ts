/**
 * Id: 235
 * Name: Lowest Common Ancestor of a Binary Search Tree
 * Link: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 */

import { TreeNode } from "../_common/TreeNode";

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  let currentNode: TreeNode | null = root;

  while (currentNode) {
    if (p!.val > currentNode.val && q!.val > currentNode.val) {
      currentNode = currentNode.right;
    } else if (p!.val < currentNode.val && q!.val < currentNode.val) {
      currentNode = currentNode.left;
    } else {
      return currentNode;
    }
  }
}
