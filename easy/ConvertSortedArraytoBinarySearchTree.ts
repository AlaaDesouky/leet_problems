/**
 * Id: 108
 * Name: Convert Sorted Array to Binary Search Tree
 * Link: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree
 */

import { TreeNode } from "../_common";

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (!nums.length) return null;

  const construct = (left: number, right: number) => {
    if (left > right) return null;
    let mid: number = Math.floor(left + (right - left) / 2);
    let node: TreeNode | null = new TreeNode(nums[mid]);
    node.left = construct(left, mid - 1);
    node.right = construct(mid + 1, right);

    return node;
  };

  return construct(0, nums.length - 1);
}
