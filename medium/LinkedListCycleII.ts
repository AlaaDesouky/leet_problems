/**
 * Id: 142
 * Name: Linked List Cycle II
 * Link: https://leetcode.com/problems/linked-list-cycle-ii/
 */

import { ListNode } from "../_common/ListNode";

function detectCycle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return null;
  let s_ptr: ListNode | null = head;
  let f_ptr: ListNode | null = head;
  let ptr: ListNode | null = head;

  while (f_ptr && f_ptr.next) {
    f_ptr = f_ptr?.next.next;
    s_ptr = s_ptr?.next!;
    if (s_ptr === f_ptr) break;
  }

  if (f_ptr !== s_ptr) return null;

  while (ptr !== s_ptr) {
    ptr = ptr?.next!;
    s_ptr = s_ptr?.next!;
  }

  return s_ptr;
}
