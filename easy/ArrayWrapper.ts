/**
 * Id: 2695
 * Name: Array Wrapper
 * Link: https://leetcode.com/problems/array-wrapper
 */
class ArrayWrapper {
  constructor(private nums: number[]) {}

  valueOf() {
    return this.nums.reduce((n: number, a: number) => n + a, 0);
  }

  toString() {
    return `[${String(this.nums)}]`;
  }
}
