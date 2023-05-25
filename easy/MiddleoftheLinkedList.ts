/**
 * Id: 876
 * Name: Middle of the Linked List
 * Link: https://leetcode.com/problems/middle-of-the-linked-list/
 */

import { ListNode } from "../_common";

function middleNode(head: ListNode | null): ListNode | null {
  let length = 0;
  let count = 0;
  let temp = head;

  while (temp) {
    length += 1;
    temp = temp.next;
  }

  length = Math.floor(length / 2);

  while (true) {
    if (count === length) return head;
    head = head?.next!;
    count += 1;
  }
}
