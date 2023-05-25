/**
 * Id: 70
 * Name: Climbing Stairs
 * Link: https://leetcode.com/problems/climbing-stairs/
 */

function climbStairs(n: number, steps: number[] = []): number {
  if (n <= 2) return n;

  if (!steps[n]) {
    steps[n] = climbStairs(n - 1, steps) + climbStairs(n - 2, steps);
  }

  return steps[n];
}
