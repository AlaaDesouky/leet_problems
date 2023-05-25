/**
 * Id: 24
 * Name: https://leetcode.com/problems/swap-nodes-in-pairs
 * Link: https://leetcode.com/problems/swap-nodes-in-pairs
 */

import { ListNode } from "../_common/ListNode";

function swapPairs(head: ListNode | null): ListNode | null {
  let dummy: ListNode | null = new ListNode(0, head);
  let prev: ListNode | null = dummy;
  let curr: ListNode | null = head;

  while (curr && curr.next) {
    prev.next = curr.next;
    curr.next = curr.next.next;
    prev.next.next = curr;
    curr = curr.next;
    prev = prev.next.next;
  }

  return dummy.next;
}
