/**
 * Id: 2632
 * Name: Curry
 * Link: https://leetcode.com/problems/curry
 */
function curry(fn: Function): Function {
  return function curried(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...rArges) => curried(...args, ...rArges);
  };
}
