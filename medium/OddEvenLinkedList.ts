/**
 * Id: 328
 * Name: Odd Even Linked List
 * Link: https://leetcode.com/problems/odd-even-linked-list/
 */

import { ListNode } from "../_common/ListNode";

function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let odd: ListNode | null = head;
  let even: ListNode | null = head.next;
  let evenHead: ListNode | null = even;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;
  return head;
}
