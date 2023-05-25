/**
 * Id: 57
 * Name: Insert Interval
 * Link: https://leetcode.com/problems/insert-interval
 */

function insert(intervals: number[][], newInterval: number[]): number[][] {
  let res: number[][] = [];

  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[1] < intervals[i][0]) {
      res.push(newInterval);
      return [...res, ...intervals.slice(i)];
    } else if (newInterval[0] > intervals[i][1]) {
      res.push(intervals[i]);
    } else {
      newInterval = [
        Math.min(newInterval[0], intervals[i][0]),
        Math.max(newInterval[1], intervals[i][1]),
      ];
    }
  }

  res.push(newInterval);
  return res;
}
