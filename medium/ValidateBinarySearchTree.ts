/**
 * Id: 98
 * Name: Validate Binary Search Tree
 * Link: https://leetcode.com/problems/validate-binary-search-tree/
 */

import { TreeNode } from "../_common/TreeNode";

function isValidBST(root: TreeNode | null): boolean {
  const isValidNode = (node: TreeNode | null, left: number, right: number) => {
    if (!node) return true;
    if (!(node.val < right && node.val > left)) return false;

    return (
      isValidNode(node.left, left, node.val) &&
      isValidNode(node.right, node.val, right)
    );
  };

  return isValidNode(root, -Infinity, Infinity);
}
