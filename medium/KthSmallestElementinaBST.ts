/**
 * Id: 230
 * Name: Kth Smallest Element in a BST
 * Link: https://leetcode.com/problems/kth-smallest-element-in-a-bst
 */

import { TreeNode } from "../_common/TreeNode";

function kthSmallest(root: TreeNode | null, k: number): number {
  let traverse: number[] = [];

  const dfs = (root: TreeNode | null) => {
    if (!root || traverse.length >= k) return;
    dfs(root.left);
    traverse.push(root.val);
    dfs(root.right);
  };

  dfs(root);
  return traverse[k - 1];
}
