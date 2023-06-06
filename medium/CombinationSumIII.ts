/**
 * Id: 216
 * Name: Combination Sum III
 * Link: https://leetcode.com/problems/combination-sum-iii/
 */
function combinationSum3(k: number, n: number): number[][] {
  let res: number[][] = [];

  const backtrack = (build: number[], num: number, sum: number) => {
    if (build.length === k) {
      if (sum === n) res.push(build);
      return;
    }

    for (let i = num; i <= 9; i++) {
      if (sum + i > n) break;
      backtrack([...build, i], i + 1, sum + i);
    }
  };

  backtrack([], 1, 0);
  return res;
}
