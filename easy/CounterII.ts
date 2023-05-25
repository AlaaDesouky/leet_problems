/**
 * Id: 2665
 * Name: Counter II
 * Link: https://leetcode.com/problems/counter-ii
 */

type ReturnObj = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): ReturnObj {
  let val = init;
  return {
    increment: () => (val += 1),
    decrement: () => (val -= 1),
    reset: () => (val = init),
  };
}
