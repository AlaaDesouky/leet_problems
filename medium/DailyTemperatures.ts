/**
 * Id: 739
 * Name: Daily Temperatures
 * Link: https://leetcode.com/problems/daily-temperatures
 */
function dailyTemperatures(temperatures: number[]): number[] {
  let res: number[] = new Array(temperatures.length).fill(0);
  let stack: number[][] = [];

  temperatures.forEach((t, idx) => {
    while (stack.length && t > stack[stack.length - 1][0]) {
      let [_, stackIdx] = stack.pop()!;
      res[stackIdx] = idx - stackIdx;
    }
    stack.push([t, idx]);
  });

  return res;
}
