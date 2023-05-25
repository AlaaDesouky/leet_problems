/**
 * Id: 56
 * Name: Merge Intervals
 * Link: https://leetcode.com/problems/merge-intervals
 */

function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  let res: number[][] = [intervals[0]];

  for (let [start, end] of intervals.splice(0)) {
    let lastEnd: number = res[res.length - 1][1];
    if (start <= lastEnd) res[res.length - 1][1] = Math.max(lastEnd, end);
    else res.push([start, end]);
  }

  return res;
}
