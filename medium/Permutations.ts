/**
 * Id: 46
 * Name: Permutations
 * Link: https://leetcode.com/problems/permutations
 */

function permute(nums: number[]): number[][] {
  let res: number[][] = [];

  if (nums.length === 1) return [nums];

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const remaining = [...nums].filter((num) => num != current);
    let perms = permute(remaining);

    for (let j = 0; j < perms.length; j++) {
      res.push([...perms[j], current]);
    }
  }

  return res;
}
