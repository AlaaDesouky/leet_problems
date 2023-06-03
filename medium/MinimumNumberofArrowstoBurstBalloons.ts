/**
 * Id: 452
 * Name: Minimum Number of Arrows to Burst Balloons
 * Link: https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons
 */
function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[0] - b[0]);
  let prev: number[] = points[0];
  let total: number = 1;
  for (let [start, end] of points.slice(1)) {
    if (start > prev[1]) {
      total += 1;
      prev = [start, end];
    } else {
      prev[1] = Math.min(prev[1], end);
    }
  }

  return total;
}
