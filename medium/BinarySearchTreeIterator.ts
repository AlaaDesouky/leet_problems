/**
 * Id: 173
 * Name: Binary Search Tree Iterator
 * Link: https://leetcode.com/problems/binary-search-tree-iterator
 */

import { TreeNode } from "../_common/TreeNode";

class BSTIterator {
  private stack: TreeNode[];
  constructor(root: TreeNode | null) {
    this.stack = [];
    this.addToStack(root);
  }

  private addToStack = (root: TreeNode | null) => {
    while (root) {
      this.stack.push(root);
      root = root.left;
    }
  };

  next = (): number => {
    let res = this.stack.pop()!;
    this.addToStack(res.right);
    return res.val;
  };

  hasNext(): boolean {
    return this.stack.length > 0;
  }
}
