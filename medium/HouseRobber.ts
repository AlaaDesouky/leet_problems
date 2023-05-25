/**
 * Id: 198
 * Name: House Robber
 * Link: https://leetcode.com/problems/house-robber
 */

function rob(nums: number[]): number {
  if (!nums.length) return 0;

  let houseA: number = 0,
    houseB: number = 0,
    temp: number;

  for (let house of nums) {
    temp = Math.max(house + houseA, houseB);
    houseA = houseB;
    houseB = temp;
  }

  return houseB;
}
