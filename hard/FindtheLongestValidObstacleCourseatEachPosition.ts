/**
 * Id: 1964
 * Name: Find the Longest Valid Obstacle Course at Each Position
 * Link: https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/
 */

function longestObstacleCourseAtEachPosition(obstacles: number[]): number[] {
  let lis: number[] = [];
  let lisLen: number[] = new Array(obstacles.length).fill(1);
  let val: number = 0;
  let idx: number = 0;

  for (let i = 0; i < obstacles.length; i++) {
    val = obstacles[i];
    if (!lis.length || lis[lis.length - 1] <= val) {
      lis.push(val);
      lisLen[i] = lis.length;
    } else {
      idx = upperBound(lis, val);
      lis[idx] = val;
      lisLen[i] = idx + 1;
    }
  }

  return lisLen;
}

function upperBound(list: number[], val: number): number {
  let l_ptr: number = 0;
  let r_ptr: number = list.length;
  let mid: number = 0;

  while (l_ptr < r_ptr) {
    mid = Math.floor((r_ptr + l_ptr + 1) / 2);

    if (list[mid] <= val) {
      l_ptr = mid;
    } else {
      r_ptr = mid - 1;
    }
  }

  return list[r_ptr] <= val ? r_ptr + 1 : r_ptr;
}
