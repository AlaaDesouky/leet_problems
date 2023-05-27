/**
 * Id: 2619
 * Name: Array Prototype Last
 * Link: https://leetcode.com/problems/array-prototype-last
 */

declare global {
  interface Array<T> {
    last(): T | -1;
  }
}

Array.prototype.last = function () {
  return this[this.length - 1] ?? -1;
};
