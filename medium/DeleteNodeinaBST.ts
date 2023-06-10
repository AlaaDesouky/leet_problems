/**
 * Id: 700
 * Name: Search in a Binary Search Tree
 * Link: https://leetcode.com/problems/search-in-a-binary-search-tree
 */
import { TreeNode } from "../_common";

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return root;

  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else {
    if (!root?.left) {
      return root.right;
    } else if (!root?.right) {
      return root.left;
    }

    let cur: TreeNode = root.right;
    while (cur.left) cur = cur.left;

    root.val = cur.val;
    root.right = deleteNode(root.right, root.val);
  }
  return root;
}
