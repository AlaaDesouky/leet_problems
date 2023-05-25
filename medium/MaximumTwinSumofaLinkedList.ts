/**
 * Id: 2130
 * Name: Maximum Twin Sum of a Linked List
 * Link: https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/
 */
import { ListNode } from "../_common/ListNode";

function pairSum(head: ListNode | null): number {
  let slow: ListNode | null = head,
    fast: ListNode | null = head,
    prev: ListNode | null = null,
    next: ListNode | null = null,
    maxSum: number = 0;

  // Get the middle of the list
  while (fast && fast.next) {
    slow = slow?.next!;
    fast = fast.next.next;
  }

  // Reverse the right part of the list
  while (slow) {
    next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // Calculate sum of pairs
  while (prev) {
    maxSum = Math.max(maxSum, head?.val! + prev.val);
    prev = prev.next;
    head = head?.next!;
  }

  return maxSum;
}
