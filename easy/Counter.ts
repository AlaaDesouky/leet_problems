/**
 * Id: 2620
 * Name: Counter
 * Link: https://leetcode.com/problems/counter
 */

function createCounter(n: number): () => number {
  return function () {
    return n++;
  };
}
