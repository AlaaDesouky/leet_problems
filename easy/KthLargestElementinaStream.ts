/**
 * Id: 703
 * Name: Kth Largest Element in a Stream
 * Link: https://leetcode.com/problems/kth-largest-element-in-a-stream
 */

import { MinHeap } from "../_common/MinHeap";

class KthLargest {
  private minHeap: MinHeap;

  constructor(private k: number, nums: number[]) {
    this.minHeap = new MinHeap(nums);
    this._init();
  }

  private _init = (): void => {
    while (this.minHeap.size() > this.k) this.minHeap.pop();
  };

  add(val: number): number {
    this.minHeap.insert(val);
    if (this.minHeap.size() > this.k) this.minHeap.pop();
    return this.minHeap.peek();
  }
}
