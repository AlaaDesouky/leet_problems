/**
 * Id: 234
 * Name: Palindrome Linked List
 * Link: https://leetcode.com/problems/palindrome-linked-list/
 */

import { ListNode } from "../_common";

function isPalindrome(head: ListNode | null): boolean {
  let fast: ListNode | null = head,
    slow: ListNode | null = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow?.next!;
  }

  let prev: ListNode | null = null;
  let temp: ListNode | null = null;
  while (slow) {
    temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  let left: ListNode | null = head;
  let right: ListNode | null = prev;

  while (right) {
    if (left?.val != right.val) return false;
    left = left.next;
    right = right.next;
  }

  return true;
}
