/**
 * Id: 199
 * Name: Binary Tree Right Side View
 * Link: https://leetcode.com/problems/binary-tree-right-side-view
 */

import { TreeNode } from "../_common/TreeNode";

function rightSideView(root: TreeNode | null): number[] {
  let res: number[] = [],
    q: (TreeNode | null)[] = [root],
    qLen: number,
    rightSide: TreeNode | null,
    currNode: TreeNode | null = null;

  while (q.length) {
    rightSide = null;
    qLen = q.length;

    for (let i = 0; i < qLen; i++) {
      currNode = q.shift()!;

      if (currNode) {
        rightSide = currNode;
        q.push(currNode.left);
        q.push(currNode.right);
      }
    }
    if (rightSide) res.push(rightSide.val);
  }

  return res;
}
