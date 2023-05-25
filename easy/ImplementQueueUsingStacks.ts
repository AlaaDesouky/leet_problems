/**
 * Id: 232
 * Name: Implement Queue using Stacks
 * Link: https://leetcode.com/problems/implement-queue-using-stacks
 */

class MyQueue {
  private s1: number[];
  private s2: number[];

  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  push = (x: number): void => {
    while (this.s1.length) this.s2.push(this.s1.pop()!);
    this.s1.push(x);
    while (this.s2.length) this.s1.push(this.s2.pop()!);
  };

  pop = (): number => this.s1.pop()!;
  peek = (): number => this.s1.slice(-1)[0];
  empty = (): boolean => this.s1.length === 0;
}
