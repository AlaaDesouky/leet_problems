/**
 * Id: 901
 * Name: Online Stock Span
 * Link: https://leetcode.com/problems/online-stock-span/
 */
class StockSpanner {
  private stack: number[][];
  constructor() {
    this.stack = [];
  }

  next(price: number): number {
    let span: number = 1;
    while (this.stack.length && price >= this.stack[this.length - 1][0]) {
      span += this.stack[this.length - 1][1];
      this.stack.pop();
    }
    this.stack.push([price, span]);
    return this.stack[this.length - 1][1];
  }

  private get length(): number {
    return this.stack.length;
  }
}
