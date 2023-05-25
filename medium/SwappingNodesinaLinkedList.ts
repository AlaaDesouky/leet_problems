/**
 * Id: 1721
 * Name: Swapping Nodes in a Linked List
 * Link: https://leetcode.com/problems/swapping-nodes-in-a-linked-list
 */

import { ListNode } from "../_common";

function swapNodes(head: ListNode | null, k: number): ListNode | null {
  let left: ListNode | null = head;
  let right: ListNode | null = head;
  let curr: ListNode | null;

  for (let i = 0; i < k - 1; i++) left = left?.next!;

  curr = left;
  while (curr?.next) {
    curr = curr.next;
    right = right?.next!;
  }

  let temp = left?.val!;
  left.val = right?.val!;
  right.val = temp;

  return head;
}
