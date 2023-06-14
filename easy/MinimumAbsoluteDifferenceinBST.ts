/**
 * Id: 530
 * Name: Minimum Absolute Difference in BST
 * Link: https://leetcode.com/problems/minimum-absolute-difference-in-bst/
 */

import { TreeNode } from "../_common/TreeNode";

function getMinimumDifference(root: TreeNode | null): number {
  let minDistance: number = Number.MAX_SAFE_INTEGER;
  let prevNode: TreeNode | null = null;

  const inOrder = (node: TreeNode | null) => {
    if (!node) return;

    inOrder(node.left);
    if (prevNode) minDistance = Math.min(minDistance, node.val - prevNode.val);
    prevNode = node;
    inOrder(node.right);
  };

  inOrder(root);
  return minDistance;
}
