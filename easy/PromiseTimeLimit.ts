/**
 * Id: 2637
 * Name: Promise Time Limit
 * Link: https://leetcode.com/problems/promise-time-limit
 */

type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
  return async (...args) => {
    const fnTimeLimit = new Promise((_, reject) =>
      setTimeout(() => reject("Time Limit Exceeded"), t)
    );
    return Promise.race([fn(...args), fnTimeLimit]);
  };
}
