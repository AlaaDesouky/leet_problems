/**
 * Id: 1431
 * Name: Kids With the Greatest Number of Candies
 * Link: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies
 */

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let maxCandies: number = candies.reduce(
    (curr, prev) => (curr > prev ? curr : prev),
    0
  );
  return candies.map((candy: number) => candy + extraCandies >= maxCandies);
}
