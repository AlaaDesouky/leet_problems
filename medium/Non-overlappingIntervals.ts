/**
 * Id: 435
 * Name: Non-overlapping Intervals
 * Link: https://leetcode.com/problems/non-overlapping-intervals/
 */
function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => a[0] - b[0]);
  let res: number = 0;
  let prevEnd: number = Number.NEGATIVE_INFINITY;
  for (let [start, end] of intervals) {
    if (start >= prevEnd) prevEnd = end;
    else {
      res += 1;
      prevEnd = Math.min(end, prevEnd);
    }
  }

  return res;
}
