/**
 * Id: 746
 * Name: Min Cost Climbing Stairs
 * Link: https://leetcode.com/problems/min-cost-climbing-stairs/
 */

function minCostClimbingStairs(cost: number[]): number {
  for (let i = cost.length - 2; i >= 0; i--) {
    cost[i] += Math.min(cost[i + 1], cost[i + 2] || 0);
  }

  return Math.min(cost[0], cost[1]);
}
