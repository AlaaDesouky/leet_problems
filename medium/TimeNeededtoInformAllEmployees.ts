/**
 * Id: 1376
 * Name: Time Needed to Inform All Employees
 * Link: https://leetcode.com/problems/time-needed-to-inform-all-employees/
 */
function numOfMinutes(
  n: number,
  headID: number,
  manager: number[],
  informTime: number[]
): number {
  let adj: number[][] = new Array(n).fill([]).map((_) => []);
  for (let i = 0; i < n; i++) adj[manager[i]]?.push(i);

  let q: number[][] = [[headID, 0]];
  let res: number = 0;

  while (q.length) {
    let [id, time] = q.shift()!;
    res = Math.max(res, time);
    for (let emp of adj[id]) q.push([emp, time + informTime[id]]);
  }

  return res;
}
