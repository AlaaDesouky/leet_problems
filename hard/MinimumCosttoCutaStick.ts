/**
 * Id: 1547
 * Name: Minimum Cost to Cut a Stick
 * Link: https://leetcode.com/problems/minimum-cost-to-cut-a-stick/
 */

function minCost(n: number, cuts: number[]): number {
  let dp: Map<string, number> = new Map<string, number>();

  const dfs = (l: number, r: number): number => {
    if (r - l === 1) return 0;
    if (dp.has(`${l},${r}`)) return dp.get(`${l},${r}`)!;

    let res = Infinity;
    for (let c of cuts) {
      if (l < c && c < r) res = Math.min(res, r - l + dfs(l, c) + dfs(c, r));
    }
    res = res === Infinity ? 0 : res;
    dp.set(`${l},${r}`, res);
    return res;
  };

  return dfs(0, n);
}
