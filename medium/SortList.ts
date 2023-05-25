/**
 * Id: 148
 * Name: Sort List
 * Link: https://www.youtube.com/watch?v=TGveA1oFhrc
 */

import { ListNode } from "../_common/ListNode";

function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let temp: ListNode | null = head;
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  let left: ListNode | null = head;
  let right: ListNode | null = head;

  while (fast && fast.next) {
    temp = slow;
    slow = slow.next!;
    fast = fast.next.next;
  }

  temp.next = null;

  left = sortList(head);
  right = sortList(slow);

  return merge(left, right);
}

function merge(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let dummy = new ListNode(0);
  let tail = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  if (list1) tail.next = list1;
  if (list2) tail.next = list2;

  return dummy.next;
}
