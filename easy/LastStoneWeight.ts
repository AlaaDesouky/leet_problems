/**
 * Id: 1046
 * Name: Last Stone Weight
 * Link: https://leetcode.com/problems/last-stone-weight
 */

import { MinHeap } from "../_common/MinHeap";

function lastStoneWeight(stones: number[]): number {
  let heap = new MinHeap(stones);
  let first = 0,
    second = 0;

  while (heap.size() > 1) {
    first = heap.pop() || 0;
    second = heap.pop() || 0;
    let val = first - second;
    if (first && second && second > first)
      heap.insert(val <= 0 ? val : val * -1);
  }

  heap.insert(0);
  return Math.abs(heap.peek());
}
