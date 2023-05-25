/**
 * Id: 206
 * Name: Reverse Linked List
 * Link: https://leetcode.com/problems/reverse-linked-list/
 */

import { ListNode } from "../_common";

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let next: ListNode | null = null;
  let current: ListNode | null = head;

  while (current) {
    next = current?.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
