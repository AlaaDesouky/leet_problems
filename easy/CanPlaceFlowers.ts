/**
 * Id: 605
 * Name: Can Place Flowers
 * Link: https://leetcode.com/problems/can-place-flowers
 */

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let r: number = 0;
  flowerbed = [0, ...flowerbed, 0];

  while (r < flowerbed.length - 1) {
    if (
      flowerbed[r - 1] === 0 &&
      flowerbed[r] === 0 &&
      flowerbed[r + 1] === 0
    ) {
      flowerbed[r] = 1;
      n -= 1;
    }
    r += 1;
  }

  return n <= 0;
}
