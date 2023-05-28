/**
 * Id: 2631
 * Name: Group By
 * Link: https://leetcode.com/problems/group-by
 */

declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>;
  }
}

Array.prototype.groupBy = function (fn) {
  const res = {};
  for (let obj of this) res[fn(obj)]?.push(obj) ?? (res[fn(obj)] = [obj]);
  return res;
};
