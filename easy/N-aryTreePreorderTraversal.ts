/**
 * Id: 589
 * Name: N-ary Tree Preorder Traversal
 * Link: https://leetcode.com/problems/n-ary-tree-preorder-traversal/
 */

import { NAryNode } from "../_common";

function preorder(root: NAryNode | null): number[] {
  let result: number[] = [];
  const traverse = (root: NAryNode | null) => {
    if (!root) return;
    result.push(root?.val);
    if (root?.children) {
      root?.children.forEach((child: NAryNode | null) => traverse(child));
    }
  };

  traverse(root);
  return result;
}
