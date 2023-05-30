/**
 * Id: 2095
 * Name: Delete the Middle Node of a Linked List
 * Link: https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list
 */
import { ListNode } from "../_common";

function deleteMiddle(head: ListNode): ListNode | null {
  let dummy: ListNode = new ListNode(0, head);
  let fast: ListNode | null = dummy.next;
  let slow: ListNode | null = dummy;
  while (fast && fast.next) {
    slow = slow?.next!;
    fast = fast.next.next;
  }

  slow.next = slow?.next?.next!;
  return dummy.next;
}
