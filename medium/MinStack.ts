/**
 * Id: 155
 * Name: Min Stack
 * Link: https://leetcode.com/problems/min-stack
 */

class MinStack {
  private stack: number[];
  private minStack: number[];
  private length: number;

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push = (val: number): void => {
    this.stack.push(val);
    val = Math.min(val, this.minStack[this.length - 1] ?? val);
    this.minStack.push(val);
    this._updateLength();
  };

  pop = (): void => {
    this.stack.pop();
    this.minStack.pop();
    this._updateLength();
  };

  top = (): number => {
    return this.stack[this.length - 1];
  };

  getMin = (): number => {
    return this.minStack[this.length - 1];
  };

  private _updateLength = (): void => {
    this.length = this.stack.length;
  };
}
