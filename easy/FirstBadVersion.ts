/**
 * Id: 278
 * Name: First Bad Version
 * Link: https://leetcode.com/problems/first-bad-version/
 */

/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let l_ptr: number = 0;
    let r_ptr: number = n;
    let mid: number = 0;
    let lastBadVersion: number = 1;

    while (l_ptr <= r_ptr) {
      mid = l_ptr + Math.floor((r_ptr - l_ptr) / 2);
      if (isBadVersion(mid)) {
        r_ptr = mid - 1;
        lastBadVersion = mid;
      } else {
        l_ptr = mid + 1;
      }
    }

    return lastBadVersion;
  };
};
