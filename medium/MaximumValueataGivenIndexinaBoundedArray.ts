/**
 * Id: 1802
 * Name: Maximum Value at a Given Index in a Bounded Array
 * Link: https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/
 */
function maxValue(n: number, index: number, maxSum: number): number {
  let emptyR: number = n - index - 1,
    emptyL: number = index,
    r: number = maxSum,
    l: number = 1,
    res: number = 0,
    mid: number;

  const rangeSum = (value: number, length: number): number => {
    value = Math.max(value, 1);
    return value >= length
      ? ((value + (value - length + 1)) * length) / 2
      : ((value - 1 + (value - 1 - (value - 1) + 1)) * (value - 1)) / 2 +
          length * 1;
  };

  while (l <= r) {
    mid = Math.floor(l + (r - l) / 2);
    if (mid + rangeSum(mid - 1, emptyL) + rangeSum(mid - 1, emptyR) <= maxSum) {
      l = mid + 1;
      res = mid;
    } else {
      r = mid - 1;
    }
  }

  return res;
}
