/**
 * Id: 2623
 * Name: Memoize
 * Link: https://leetcode.com/problems/memoize
 */
type Fn = (...params: any) => any;

function memoize(fn: Fn): Fn {
  let cache = {};
  return (...args) => cache[args.join()] ?? (cache[args.join()] = fn(...args));
}
