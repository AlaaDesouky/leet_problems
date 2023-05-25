/**
 * Id: 39
 * Name: Combination Sum
 * Link: https://leetcode.com/problems/combination-sum
 */

function combinationSum(candidates: number[], target: number): number[][] {
  let res: number[][] = [];

  const dfs = (i: number, cur: number[], total: number) => {
    if (total === target) return res.push([...cur]);
    if (i >= candidates.length || total > target) return;

    cur.push(candidates[i]);
    dfs(i, cur, total + candidates[i]);
    cur.pop();
    dfs(i + 1, cur, total);
  };

  dfs(0, [], 0);
  return res;
}
