/**
 * Id: 705
 * Name: Design HashSet
 * Link: https://leetcode.com/problems/design-hashset/
 */

import { ListNode } from "../_common/ListNode";

class MyHashSet {
  private set: ListNode[];
  private length: number;

  constructor() {
    this.length = Math.pow(10, 4);
    this.set = new Array(this.length).fill(new ListNode(0));
  }

  add(key: number): void {
    let curr: ListNode = this.set[key % this.length];

    while (curr.next) {
      if (curr.next.val === key) return;
      curr = curr.next;
    }
    curr.next = new ListNode(key);
  }

  remove(key: number): void {
    let curr: ListNode = this.set[key % this.length];

    while (curr.next) {
      if (curr.next.val === key) {
        curr.next = curr.next.next;
        return;
      }
      curr = curr.next;
    }
  }

  contains(key: number): boolean {
    let curr: ListNode = this.set[key % this.length];

    while (curr.next) {
      if (curr.next.val === key) return true;
      curr = curr.next;
    }
    return false;
  }
}
