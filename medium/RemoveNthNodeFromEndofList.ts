/**
 * Id: 19
 * Name: Remove Nth Node From End of List
 * Link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 */

import { ListNode } from "../_common/ListNode";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummyNode: ListNode = new ListNode(0, head);
  let leftNode: ListNode | null = dummyNode;
  let rightNode: ListNode | null = head;

  while (n > 0 && rightNode) {
    rightNode = rightNode.next;
    n -= 1;
  }

  while (rightNode) {
    leftNode = leftNode?.next;
    rightNode = rightNode.next;
  }

  let temp = leftNode.next.next;
  leftNode.next.next = null;
  leftNode.next = temp;

  return dummyNode.next;
}
